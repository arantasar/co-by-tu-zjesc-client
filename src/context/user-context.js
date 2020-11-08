import React, { useState } from "react";

export const UserContext = React.createContext({
  isUserLogged: false,
  user: {
    email: "",
    name: "",
    description: "",
    lastLogin: "",
    role: "",
    favourites: [],
    recipes: [],
    photoPath: "",
    daysInService: "",
    receivedLikes: "",
  },
  token: "",
  login: () => {},
  logout: () => {},
  updateUser: (updatedUser) => {},
});

const UserContextComponent = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const [isUserLogged, setIsUserLogged] = useState(
    !!localStorage.getItem("isUserLogged")
  );

  const updateUser = ({ description, email, photoPath }) => {
    setUser((prev) => ({
      ...prev,
      description,
      email,
      photoPath,
    }));
    localStorage.setItem("user", JSON.stringify(user));
  };

  const login = (user, token) => {
    setUser(user);
    setToken(token);
    setIsUserLogged(true);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("isUserLogged", "true");
  };

  const logout = () => {
    setUser("");
    setToken("");
    setIsUserLogged(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isUserLogged");
  };

  const value = { isUserLogged, user, login, logout, token, updateUser };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextComponent;
