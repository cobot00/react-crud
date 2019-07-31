import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit.js';
import DeleteIcon from '@material-ui/icons/Delete.js';

import {mockAPI} from 'api/mock.js';

class ListForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      name: '',
      params: props.params
    };

    this.onClickCreate = this.onClickCreate.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);

    mockAPI.index().then((res) => {
      this.setState({
        records: res.data
      });
    });
  }

  onClickCreate() {
    const params = {label: 'dummy', socre: 12};
    mockAPI.create(params).then((res) => {
      console.log('[onClickCreate]: ' + JSON.stringify(res));
    });
  }

  onClickUpdate(id) {
    const params = {label: 'dummy', socre: 12};
    mockAPI.update(id, params).then((res) => {
      console.log('[onClickUpdate]: ' + JSON.stringify(res));
    });
  }

  onClickDelete(id) {
    mockAPI.delete(id).then((res) => {
      console.log('[onClickDelete]: ' + JSON.stringify(res));
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

        <div style={{marginLeft: '30px'}}>
          <Button variant="outlined" color="primary" size="small" onClick={this.onClickCreate} style={{marginRight: '30px'}} >
            Create
          </Button>
        </div>

        <SimpleTable rows={this.state.records} updateAction={this.onClickUpdate} deleteAction={this.onClickDelete} />

        <NumberList />
      </div>
    );
  }
}

const SimpleTable = (props) => {
  const rows = props.rows || [];
  const updateAction = props.updateAction;
  const deleteAction = props.deleteAction;

  return (
    <div style={{height: '400px', overflow: 'scroll', marginBottom: '30px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" className="sticky-head">id</TableCell>
            <TableCell align="left" className="sticky-head">label</TableCell>
            <TableCell align="left" className="sticky-head">action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.label}</TableCell>
              <TableCell align="left">
                <button onClick={() => updateAction(row.id)} className="cell-button" style={{marginRight: '30px'}}>
                  <EditIcon color="primary" fontSize="small" />
                </button>

                <button onClick={() => deleteAction(row.id)} className="cell-button">
                  <DeleteIcon color="secondary" fontSize="small" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

SimpleTable.propTypes = {
  rows: PropTypes.array,
  updateAction: PropTypes.func,
  deleteAction: PropTypes.func
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
