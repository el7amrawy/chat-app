import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";

type User = {
  id?: Number;
  username: string;
  name: string;
  password: string;
  email: string;
};

export type UserData = {
  user: User;
  token: string;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as unknown as React.ComponentState);

const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  /* ===================== states ===================== */
  const [userData, setUserData] = useState(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", "{}");
    }
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "null");
    }
    return {
      user: JSON.parse(localStorage.getItem("user") as unknown as string),
      token: JSON.parse(localStorage.getItem("token") as unknown as string),
    } as unknown as UserData;
  });
  /* ===================== effects ===================== */
  useEffect(() => {
    if (userData.user) {
      localStorage.setItem("user", JSON.stringify(userData.user));
      localStorage.setItem("token", JSON.stringify(userData.token));
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
