import ICategory from "./ICategory";
import IDiet from "./IDiet";
import IRecipeLine from "./IRecipeLine";
import IUser from "./IUser";

export default interface IRecipe {
  id: string;
  categories: ICategory[];
  dateAdded: string;
  description: string;
  diets: IDiet[];
  inFavourite: number;
  likes: number;
  name: string;
  photoPath: string;
  recipeLines: IRecipeLine[];
  user: IUser;
  userId: string;
  viewCounter: number;
  size: number;
  prepareTime: number;
  userName: string;
  itemId: string;
}
