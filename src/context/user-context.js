import React from "react";

const userContext = React.createContext({
  isUserLogged: false,
  user: {},
  token: "",
  login: () => {},
  logout: () => {},
});



export default userContext;
