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
    background: '#202842',
    minWidth: 650,
  },
});

function createData(id, restaurant_id, rating, review, report) {
            return {id, restaurant_id, rating, review, report};
}

const rows = [
  createData('1', '2', 'Hazi', '4.5' ),
  createData('2', '23', 'Hanif', '4.2' ),
  createData('3, '2', 'Bismillah', '4.7' ),
];

export default function OrderList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>ID</TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Restaurant
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              User Name
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Contact Number
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Region
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Address
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Status
            </TableCell>
            
            <TableCell align="right" style={{ color: 'white' }}>
              Total Bill
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Order Details
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
                {row.user_id}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.user_name}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.contact_no}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.region}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.address}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.status}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.total_bill}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {
                  <Grid item xs={8}>
                    
                    <DetailsIcon />
                  
                  </Grid>
                }
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
