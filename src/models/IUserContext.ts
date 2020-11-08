import IUser from "./IUser";

export interface IUserContext {
  isUserLogged: boolean;
  user: IUser | null;
  token: string;
  login: (user: IUser, token: string) => void;
  logout: () => void;
  updateUser: (updatedUser: IUser) => void;
}
