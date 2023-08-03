import React, { useState } from "react";
import { IProfile } from "./model";
import useFetch from "@/components/hooks/fetch";
import { getCookie } from "@/helper";
import { apiReqHandler } from "@/components/apiHandler";

interface IProfileState {
  loading: boolean;
  profile: IProfile;
  getProfile: () => Promise<void>;
  updateProfile: (payload: IProfile) => Promise<void>;
}

const ProfileContext = React.createContext<IProfileState>({
  loading: false,
  profile: {} as any,
  getProfile() {
    return null as any;
  },
  updateProfile(payload) {
    return null as any;
  },
});

export const useProfileState = () => {
  const context = React.useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }

  return context;
};

interface IProps {
  children: React.ReactNode;
}
export const ProfileContextProvider: React.FC<IProps> = ({ children }) => {
  const [profile, setProfile] = useState<IProfile>() as any;
  const [loading, setLoading] = useState<boolean>(false);

  const getProfile = async () => {
    setLoading(true);
    const id = getCookie("userId");
    let endPoint = `${process.env.NEXT_PUBLIC_API_ROUTE}/auth/user/${id}`;

    try {
      const res = await apiReqHandler({
        endPoint,
        method: "GET",
      });
      setLoading(false);
      const { data } = await res.res?.data;
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async (payload: IProfile) => {
    const id = getCookie("userId");
    let endPoint = `${process.env.NEXT_PUBLIC_API_ROUTE}/auth/user/${id}`;
    try {
      const res = await apiReqHandler({
        endPoint,
        method: "POST",
        payload,
      });
      setLoading(false);
      const { data } = await res.res?.data;
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        loading,
        profile,
        getProfile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
