import React, { useState } from "react";

export const UserContext = React.createContext({
  isUserLogged: false,
  user: {
    email: "",
    name: "",
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
});

const UserContextComponent = (props) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [isUserLogged, setIsUserLogged] = useState(false);

  const login = (user, token) => {
    setUser(user);
    setToken(token);
    setIsUserLogged(true);
  };

  const logout = () => {
    setUser("");
    setToken("");
    setIsUserLogged(false);
  };

  const value = { isUserLogged, user, login, logout, token };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextComponent;
