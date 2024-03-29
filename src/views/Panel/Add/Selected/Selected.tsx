import React, { FC } from "react";
import IExtendedIngredient from "../../../../models/IExtendedIngredient";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import SelectedRow from "../SelectedRow";

interface IProps {
  ingredients: IExtendedIngredient[];
  deleteHandler: (id: string) => void;
  quantityHandler: (id: string, quantity: number) => void;
  unitHandler: (id: string, unitId: string) => void;
}

const Selected: FC<IProps> = ({
  ingredients,
  deleteHandler,
  unitHandler,
  quantityHandler,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ width: "50%" }}>Nazwa</TableCell>
          <TableCell style={{ width: "30%" }} align="right">
            Jednostka
          </TableCell>
          <TableCell align="right">Ilość</TableCell>
          <TableCell align="right">Usuń</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ingredients.map((ingredient) => (
          <SelectedRow
            quantityHandler={quantityHandler}
            unitHandler={unitHandler}
            key={ingredient.id}
            ingredient={ingredient}
            handleDelete={deleteHandler}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default Selected;
