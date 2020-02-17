import initialState from "./initialState";
import { ActionTypes, LOGIN, LOGOUT } from "./types";

const rootReducer = (state = initialState, action: ActionTypes) => {
  return state;
};

export default rootReducer;
