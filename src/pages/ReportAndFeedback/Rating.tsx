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
import DetailsIcon from '@material-ui/icons/Details';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  table: {
    background: '#232b45',
    minWidth: 650,
  },
});

function createData(id, customer_number, food_id, item, restaurant_id, restaurant, rating) {
  return { id, customer_number, food_id, item, restaurant_id, restaurant, rating };
}

const rows = [
  createData('1', '01676217481', '12', 'Biriyani', '1', 'Hazi', '4.5'),
  createData('2', '01676217481', '33', 'Biriyani', '2', 'Hanif', '4.2'),
  createData('3', '01676217481', '23', 'Beef chap', '3', 'Bismillah', '3'),
];

export default function Rating() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>ID</TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Customer Contact Number
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Food Item ID
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Item
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Restaurant ID
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Restaurant
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Rating
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
                {row.customer_number}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.food_id}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.item}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.restaurant_id}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.restaurant}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.rating}
              </TableCell>

              <TableCell align="right" style={{ color: 'white' }}>
                {
                  <Grid item xs={8}>
                    <EditIcon />
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
