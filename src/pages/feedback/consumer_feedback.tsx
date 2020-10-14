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
    background: '#202842',
    minWidth: 650,
  },
});

function createData(id, item_name, food_category, restaurant, food_image, description) {
            return {id, item_name, food_category, restaurant, food_image, description};
}

const rows = [
  createData('1', 'Beef Chap', 'Kebab', 'Bismillah', 'image', 'description'),
  createData('1', 'Beef Chap', 'Kebab', 'Bismillah', 'image', 'description'),
  createData('1', 'Beef Chap', 'Kebab', 'Bismillah', 'image', 'description'),
];

export default function FoodItemList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>ID</TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Item Name
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Food Caregory
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Food Image
            </TableCell>
            <TableCell align="right" style={{ color: 'white' }}>
              Description
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
                {row.item_name}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.food_category}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.food_image}
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>
                {row.description}
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
