export default interface IUser {
  description: string;
  email: string;
  name: string;
  lastLogin: string;
  role: string;
  favourites: object[];
  recipes: object[];
  photoPath: string;
  daysInService: number;
  receivedLikes: number;
}
