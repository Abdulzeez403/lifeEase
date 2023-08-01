import React, { useEffect } from "react";
import { useProfileState } from "./context";

export const ProfilePage = () => {
  const { loading, profile, getProfile } = useProfileState();
  useEffect(() => {
    getProfile();
  }, []);

  return <div></div>;
};
