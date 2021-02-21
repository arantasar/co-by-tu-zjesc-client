import React, { FC, useState, ChangeEvent } from "react";
import {
  TableCell,
  TableRow,
  Select,
  FormControl,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IExtendedIngredient from "../../../models/IExtendedIngredient";

interface ISelectedRowProps {
  ingredient: IExtendedIngredient;
  handleDelete: (id: string) => void;
  quantityHandler: (id: string, quantity: number) => void;
  unitHandler: (id: string, unitId: string) => void;
}

const SelectedRow: FC<ISelectedRowProps> = ({
  ingredient,
  handleDelete,
  unitHandler,
  quantityHandler,
}) => {
    console.log(ingredient);
  return (
    <TableRow key={ingredient.name}>
      <TableCell component="th" scope="row">
        {ingredient.name}
      </TableCell>
      <TableCell align="right">
        <FormControl fullWidth>
          <Select
            id="unit"
            value={(ingredient.unit && ingredient.unit.id) || ""}
            name={"unit"}
            onChange={(e) =>
              unitHandler(ingredient.id, e.target.value as string)
            }
          >
            {ingredient.units.map((unit) => (
              <MenuItem key={unit.id} value={unit.id}>
                {unit.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell align="right">
        <TextField
          fullWidth
          inputProps={{ style: { textAlign: "right" } }}
          type={"number"}
          value={ingredient.quantity}
          onChange={(e) => quantityHandler(ingredient.id, +e.target.value)}
        />
      </TableCell>
      <TableCell align="right">
        <StyledIcon
          icon={faTrash}
          onClick={() => handleDelete(ingredient.id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default SelectedRow;

const StyledIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;
