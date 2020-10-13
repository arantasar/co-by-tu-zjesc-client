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

interface IProps {
  ingredient: IExtendedIngredient;
  handleDelete: (id: string) => void;
}

const SelectedRow: FC<IProps> = ({ ingredient, handleDelete }) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    ingredient.quantity
  );
  const [selectedUnit, setSelectedUnit] = useState<string>(
    ingredient.units[0].id
  );

  const handleUnit = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedUnit(event.target.value as string);
  };

  const handleQuantity = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedQuantity(event.target.value as number);
  };

  return (
    <TableRow key={ingredient.name}>
      <TableCell component="th" scope="row">
        {ingredient.name}
      </TableCell>
      <TableCell align="right">
        <FormControl fullWidth>
          <Select
            id="unit"
            value={selectedUnit}
            name={"unit"}
            onChange={handleUnit}
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
          value={selectedQuantity}
          onChange={handleQuantity}
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
