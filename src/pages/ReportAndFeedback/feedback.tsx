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

function createData(id, customer_number, order_id, feed_back) {
  return { id, customer_number, order_id, feed_back };
}

const rows = [
  createData('1', '01676217481', '12', 'Good'),
  createData('2', '01676217481', '33', 'Bhalo na'),
  createData('3', '01676217481', '23', 'supper'),
];

export default function FeedBack() {
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
              Order ID
            </TableCell>

            <TableCell align="right" style={{ color: 'white' }}>
              Feed Back
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
                {row.order_id}
              </TableCell>

              <TableCell align="right" style={{ color: 'white' }}>
                {row.feed_back}
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
