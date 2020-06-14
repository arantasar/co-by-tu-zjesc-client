import React from "react";

const userContext = React.createContext({
  isUserLogged: false,
  user: {},
  login: () => {},
  logout: () => {},
});

export default userContext;
