import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {mockAPI} from 'api/mock.js';

class ListForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      name: '',
      params: props.params
    };

    mockAPI.index().then((res) => {
      this.setState({
        records: res.data
      });
    });
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

        <SimpleTable rows={this.state.records} />

        <NumberList />
      </div>
    );
  }
}

const SimpleTable = (props) => {
  const rows = props.rows || [];
  return (
    <div style={{height: '400px', overflow: 'scroll', marginBottom: '30px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" className="sticky-head">id</TableCell>
            <TableCell align="left" className="sticky-head">label</TableCell>
            <TableCell align="left" className="sticky-head">dummy</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.label}</TableCell>
              <TableCell align="left"></TableCell>
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

export default ListForm;
