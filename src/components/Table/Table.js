import React from 'react';
import {
  Table as MaterialTable,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Table = ({ columns, items, onRowSelection, isSelected }) => (
  <MaterialTable onRowSelection={onRowSelection}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        {
          columns.map(column => (
            <TableHeaderColumn key={column.name}>{column.title}</TableHeaderColumn>
          ))
        }
      </TableRow>
    </TableHeader>
    <TableBody
      deselectOnClickaway={false}
      displayRowCheckbox={false}
      showRowHover={true}
      stripedRows={true}
    >
      {
        items.map(item => (
          <TableRow selected={isSelected(item)}>
            {
              columns.map(column => (
                <TableRowColumn key={column.name}>
                  {item[column.name]}
                </TableRowColumn>
              ))
            }
          </TableRow>
        ))
      }
    </TableBody>
  </MaterialTable>
);

export default Table;