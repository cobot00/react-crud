import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ListForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      name: '',
      params: props.params
    };
  }

  render() {
    return (
      <div>
        <h2>List</h2>

        <SimpleTable rows={this.generateRow()} />

        <NumberList />
      </div>
    );
  }

  generateRow() {
    const createData = (id, name, calories, fat, carbs, protein) => {
      return { id, name, calories, fat, carbs, protein };
    };
    return [
      createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData(3, 'Eclair', 262, 16.0, 24, 6.0),
      createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
      createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
    ];
  }
}

const NumberList = () => {
  const items = [1, 2, 3, 4].map((n) =>
    <li key={n.toString()}>
      {n}
    </li>
  );
  return (
    <ul>{items}</ul>
  );
}

const SimpleTable = (props) => {
  const rows = props.rows;
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListForm;
