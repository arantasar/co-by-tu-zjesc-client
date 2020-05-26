import IUnit from "./IUnit";

export default interface IIngredient {
  id: string;
  name: string;
  units: IUnit[];
  alternatives: IUnit[];
  photoUrl: string;
}
