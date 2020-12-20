import React, { FC, useState } from "react";
import UserContext from "./UserContext";
import IUser from "../models/IUser";

const UserContextProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [user, setUser] = useState<IUser | null>(
    (JSON.parse(localStorage.getItem("user") as string) as IUser) || null
  );
  const [isUserLogged, setIsUserLogged] = useState<boolean>(
    !!localStorage.getItem("isUserLogged")
  );

  const updateUser = ({ description, email, photoPath, ...rest }: IUser) => {
    setUser((prev) => {
      return prev
        ? {
            ...prev,
            ...rest,
            description,
            email,
            photoPath,
          }
        : null;
    });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const login = (user: IUser, token: string) => {


    setUser(user);
    setToken(token);
    setIsUserLogged(true);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("isUserLogged", "true");
  };

  const logout = () => {
    setUser(null);
    setToken("");
    setIsUserLogged(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isUserLogged");
  };

  const value = { isUserLogged, user, login, logout, token, updateUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
