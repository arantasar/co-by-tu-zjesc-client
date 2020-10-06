import IUnit from "./IUnit";
import IIngredient from "./IIngredient";

export default interface IExtendedIngredient extends IIngredient {
  quantity: number;
  unit?: IUnit;
  id: string;
}
