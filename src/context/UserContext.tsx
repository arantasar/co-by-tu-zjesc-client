import { createContext } from "react";
import { IUserContext } from "../models/IUserContext";

const context = {
  isUserLogged: false,
  user: {
    id: "",
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
    dateCreated: "",
  },
  token: "",
  login: () => {},
  logout: () => {},
  updateUser: () => {},
};

export default createContext<IUserContext>(context);
