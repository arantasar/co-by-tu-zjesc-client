export default interface RecipeProps {
  id: string;
  author: string;
  date: Date;
  image?: string;
  dsc: string;
  name: string;
  views: number;
  stars: number;
  likes: number;
}
