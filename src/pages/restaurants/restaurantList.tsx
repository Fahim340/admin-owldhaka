import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
  table: {
    background: '#232b45',
    minWidth: 650,
  },
});

function createData(id, name, category, location, address, action) {
  return { id, name, category, location, address, action };
}

const rows = [
  createData('1', 'Hazi', 'Biriyani', 'Nazira Bazar', '30/A, Nazira Bazar Road, Dhaka'),
  createData('2', 'Kashmiri', 'Kabab & Biriyani', 'Nazira Bazar', '30, Nazira Bazar Road, Dhaka'),
  createData('3', 'Bismillah', 'Kabab', 'Nazira Bazar', '30, Nazira Bazar Road, Dhaka'),
];

export default function restaurantList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>ID</TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Name
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Category
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Location
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Address
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" style={{ color: 'white' }}>
                {row.id}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.category}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.location}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.address}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {
                  <Grid item xs={8}>
                    <EditIcon /> <VisibilityOffIcon />
                    <DeleteIcon />
                  </Grid>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
