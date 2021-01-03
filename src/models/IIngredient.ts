import IUnit from "./IUnit";

export default interface IIngredient {
  id: string;
  name: string;
  units: IUnit[];
  alternatives: IUnit[];
  photoPath: string;
  photoUrl: string;
}
