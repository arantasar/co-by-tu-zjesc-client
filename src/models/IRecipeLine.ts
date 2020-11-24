import IUnit from "./IUnit";
import IIngredient from "./IIngredient";

export default interface IRecipeLine {
  id: string;
  amount: number;
  unit: IUnit;
  ingredient: IIngredient;
}
