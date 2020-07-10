import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper } from "@material-ui/core";
import IDiet from "../../../../models/IDiet";

interface IDietsTableProps {
  diets: IDiet[];
  deleteDiet: (id: string) => void;
}

const DietsTable: React.FC<IDietsTableProps> = ({ diets, deleteDiet }) => (
  <Paper elevation={3}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nazwa</TableCell>
          <TableCell align="right">Usuń</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {diets.map((row) => (
          <TableRow key={row.id} hover>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">
              <DeleteIcon cursor="pointer" onClick={() => deleteDiet(row.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default DietsTable;
