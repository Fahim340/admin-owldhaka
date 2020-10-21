import { Tabs, Tab } from '@paljs/ui/Tabs';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Card } from '@paljs/ui/Card';
import React from 'react';
import SEO from '../../components/SEO';

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

function createData(id, user_email, user_name, contact_no, region, address, status, total_bill, order_details, action) {
  return { id, user_email, user_name, contact_no, region, address, status, total_bill, order_details, action };
}

const rows = [
  createData(
    '1',
    'fahimkhan340@gmail.com',
    'Fahim Khan',
    '01676217481',
    'Dhanmindi',
    'H-30/A, Road 15,Dhanmondi,Dhaka ',
    'delivering',
    '590',
  ),
  createData(
    '1',
    'fahimkhan340@gmail.com',
    'Fahim Khan',
    '01676217481',
    'Dhanmindi',
    'H-30/A, Road 15,Dhanmondi,Dhaka ',
    'delivering',
    '590',
  ),
  createData(
    '1',
    'fahimkhan340@gmail.com',
    'Fahim Khan',
    '01676217481',
    'Dhanmindi',
    'H-30/A, Road 15,Dhanmondi,Dhaka ',
    'delivering',
    '590',
  ),
];

export default function OrderList() {
  const classes = useStyles();

  return (
    <>
      <SEO title="Tabs" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <Tabs activeIndex={0} fullWidth>
              <Tab
                title="Pending Order"
                icon="icon ion-ios-home"
                badge={{ status: 'Danger', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>New Order</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ color: 'white' }}>ID</TableCell>
                        <TableCell align="right" style={{ color: 'white' }}>
                          User Email
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
                            {row.user_email}
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
              </Tab>
              <Tab
                title="Preparing"
                icon="icon ion-ios-star-outline"
                badge={{ status: 'Warning', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>Preparing</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ color: 'white' }}>ID</TableCell>
                        <TableCell align="right" style={{ color: 'white' }}>
                          User Email
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
                            {row.user_email}
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
              </Tab>
              <Tab
                title="Delivering"
                icon="icon ion-ios-switch"
                badge={{ status: 'Info', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>Delivering</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ color: 'white' }}>ID</TableCell>
                        <TableCell align="right" style={{ color: 'white' }}>
                          User Email
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
                            {row.user_email}
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
              </Tab>
              <Tab
                title="Complete"
                icon="icon ion-ios-switch"
                badge={{ status: 'Success', title: '11', position: 'topStart' }}
                responsive
              >
                <h1>Complete</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ color: 'white' }}>ID</TableCell>
                        <TableCell align="right" style={{ color: 'white' }}>
                          User Email
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
                            {row.user_email}
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
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </>
  );
}
