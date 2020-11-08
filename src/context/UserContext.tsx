import { createContext } from "react";
import { IUserContext } from "../models/IUserContext";

const context = {
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
    daysInService: 0,
    receivedLikes: 0,
  },
  token: "",
  login: () => {},
  logout: () => {},
  updateUser: () => {},
};

export default createContext<IUserContext>(context);
