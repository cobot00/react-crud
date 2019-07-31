import React from 'react';
import PropTypes from 'prop-types';

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

  static get propTypes() {
    return {
      params: PropTypes.object.isRequired
    };
  }

  render() {
    return (
      <div>
        <h2>List</h2>

        <SimpleTable />

        <NumberList />
      </div>
    );
  }

  generateRow() {

    const createData = (id, name, calories, fat, carbs, protein) => {
      return {id, name, calories, fat, carbs, protein};
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
};

const SimpleTable = () => {
  const rows = Array(100).fill(0).map((_, index) => {
    const n = index + 1;
    const state = ['good', 'bad', 'fine'][Math.floor(Math.random() * 3)];
    return {id: n, label: `Label${n}`, state: state, score: Math.floor(Math.random() * 50)};
  });

  return (
    <div style={{height: '400px', overflow: 'scroll', marginBottom: '30px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" className="sticky-head">ID</TableCell>
            <TableCell align="left" className="sticky-head">Label</TableCell>
            <TableCell align="left" className="sticky-head">State</TableCell>
            <TableCell align="left" className="sticky-head">Score</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left"><span className="simple-cell">{row.id}</span></TableCell>
              <TableCell align="left"><span className="simple-cell">{row.label}</span></TableCell>
              <TableCell align="left"><span className="simple-cell">{row.state}</span></TableCell>
              <TableCell align="left"><span className="simple-cell">{row.score}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

SimpleTable.propTypes = {
  rows: PropTypes.array
};

export default ListForm;
