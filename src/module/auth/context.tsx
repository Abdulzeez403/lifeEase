import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IAuthSignIn, IAuthSignUp } from "./model";
import axios from "axios";
import { deleteCookie, setCookie } from "@/helper";
import { apiReqHandler } from "@/components/apiHandler";

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

export const AuthContextProvder: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any>({} as any);

    const CurrentUser = () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser") as any);
        setUser(currentUser);
    };

    const CreateUser = async (values: IAuthSignUp) => {
        setLoading(true);

        // try {
        //   axios
        //     .post("https://life-ease.onrender.com/", values)
        //     .then(() => {
        //       toast.success("Post Successfully");
        //     }).then(() => {
        //       setLoading(false);
        //       toast.success("Registered Successfully");
        //     })
        // } catch (error) {
        //   toast.error("Error occurred!");

        // }
        try {
            const res = await apiReqHandler({
                endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/auth/signup`,
                method: "POST",
                payload: JSON.stringify(values),
            });
            setLoading(false);
            const data = await res.res?.data;
            // setCookie("userId", data?.user?._id, 3);
            console.log(data);
            if (res?.res?.status === 200) {
                if (data.error) {
                    toast.error(data.error);
                }
            }
            return data;
        } catch (error: any) {
            console.log(error);
            toast.error(error);
        }
    };

    const LogInUser = async (values: IAuthSignIn) => {
        setLoading(true);
        // try {
        //   const res = await fetch("https://life-ease.onrender.com/", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(values),
        //   });
        //   setLoading(false);
        //   const data = await res.json();
        //   localStorage.setItem("currentUser", JSON.stringify(data));
        //   setCookie('userId', data.userId, 3)
        //   toast.success("Login Successfully");
        // } catch (error) {
        //   console.log(error);
        // }
        try {
            const response = await apiReqHandler({
                endPoint: `${process.env.NEXT_PUBLIC_API_ROUTE}/auth/login`,
                method: "POST",
                payload: JSON.stringify(values),
            });
            setLoading(false);
            const data = await response.res?.data;
            console.log(data);
            if (response?.res?.status === 200) {
                if (data.error) {
                    toast.error(data.error);
                }
                setCookie("userId", data?.user?._id, 3);
            }
            return data;
        } catch (error: any) {
            console.log(error);
            toast.error(error);
        }
    };

    const LogOutUser = async () => {
        // const LogMeOut = localStorage.removeItem("currentUser");
        // return LogMeOut;
        const logout = deleteCookie("userId", 3);
        return logout;
    };

    return (
        <UserContext.Provider
            value={{ loading, user, LogInUser, CreateUser, CurrentUser, LogOutUser }}
        >
            {children}
        </UserContext.Provider>
    );
};
