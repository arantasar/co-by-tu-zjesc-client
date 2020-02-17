import { LOGIN, LOGOUT, ActionTypes } from "./types";

export function login(user: object): ActionTypes {
  return {
    type: LOGIN,
    payload: user
  };
}

export function logout(): ActionTypes {
  return {
    type: LOGOUT
  };
}
