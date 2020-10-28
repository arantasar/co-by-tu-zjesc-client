export default interface IUser {
  email: string;
  name: string;
  lastLogin: string;
  role: string;
  favourites: any[];
  recipes: any[];
  photoPath: string;
  daysInService: number;
  receivedLikes: number;
}
