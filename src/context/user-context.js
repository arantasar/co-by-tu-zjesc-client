import React from "react";

const userContext = React.createContext({
  isUserLogged: false,
  user: {},
  login: user => {}
});

export default userContext;
