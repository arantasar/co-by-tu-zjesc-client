import IRecipe from "./IRecipe";

export default interface IUser {
  id: string;
  description: string;
  email: string;
  name: string;
  lastLogin: string;
  role: string;
  favourites: IRecipe[];
  recipes: IRecipe[];
  photoPath: string;
  daysInService: number;
  receivedLikes: number;
  dateCreated: string;
  recipesAddedCount: number;
}
