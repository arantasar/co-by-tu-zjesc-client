import React from "react";

export const UserContext = React.createContext({
  isUserLogged: false,
  user: {
    role: "",
  },
  token: "",
  login: () => {},
  logout: () => {},
});

const UserContextComponent = (props) => {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState({});
  const [isUserLogged, setIsUserLogged] = React.useState(false);

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
