import IIngredient from "./IIngredient";
import ICategory from "./ICategory";
import IDiet from "./IDiet";

type Item = IIngredient | ICategory | IDiet | { id: string; name: string };

export default Item;
