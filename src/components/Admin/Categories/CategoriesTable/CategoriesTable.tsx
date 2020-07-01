import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper } from "@material-ui/core";
import ICategory from "../../../../models/ICategory";

interface ICategoriesTableProps {
  categories: ICategory[];
  deleteCategory: (id: string) => void;
}

const CategoriesTable: React.FC<ICategoriesTableProps> = ({
  categories,
  deleteCategory,
}) => (
  <Paper elevation={3}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nazwa</TableCell>
          <TableCell align="right">Usuń</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories.map((row) => (
          <TableRow key={row.id} hover>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">
              <DeleteIcon
                cursor="pointer"
                onClick={() => deleteCategory(row.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default CategoriesTable;
