
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IAuthSignIn, IAuthSignUp } from "./model";
import axios from "axios";

interface IUser {
  loading: boolean;
  user: any;
  CreateUser: (value: IAuthSignUp) => void;
  LogInUser: (value: IAuthSignIn) => void;
  CurrentUser: () => void;
  LogOutUser: () => Promise<any>;
}

const UserContext = createContext<IUser>({
  loading: false,
  user: null,
  CreateUser(value) { },
  LogInUser(value) { },
  CurrentUser() {
    return null;
  },
  LogOutUser() {
    return null as any;
  },
});
export const useUserContext = () => {
  let context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const UserContextProvder: React.FC<IProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>({} as any);

  const CurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") as any);
    setUser(currentUser);
  };


  const CreateUser = async (values: IAuthSignUp) => {
    setLoading(true);

    try {
      await axios
        .post("https://life-ease.onrender.com/auth/signup", values)
        .then(() => {
          toast.success("Post Successfully");
        }).then(() => {
          setLoading(false);
          toast.success("Registered Successfully");
        })
    } catch (error) {
      toast.error("Error occurred!");

    }

  };

  const LogInUser = async (values: IAuthSignIn) => {
    setLoading(true);
    try {
      const res = await fetch("https://life-ease.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setLoading(false);
      const data = await res.json();
      localStorage.setItem("currentUser", JSON.stringify(data));
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const LogOutUser = async () => {
    const LogMeOut = localStorage.removeItem("currentUser");
    return LogMeOut;
  };

  return (
    <UserContext.Provider value={{ loading, user, LogInUser, CreateUser, CurrentUser, LogOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
