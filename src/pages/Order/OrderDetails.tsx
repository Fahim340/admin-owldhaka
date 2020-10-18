import { List, ListItem } from '@paljs/ui/List';
import { Card } from '@paljs/ui/Card';
import User from '@paljs/ui/User';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import SEO from '../../components/SEO';

const ListPage = () => {
  const userList = [
    { name: 'Customer Email', title: 'fahimkhan340@gmail.com' },
    { name: 'Customer Name', title: 'MD. Fahim Islam Khan' },
    { name: 'Customer Contact', title: '01676217481' },
    { name: 'Region', title: 'Dhanmondi' },
    { name: 'Address', title: 'House 30/A, Road 15, Dhanmondi, Dhaka' },
    { name: 'Placing Time', title: '1:30 AM' },
  ];

  return (
    <>
      <SEO title="List" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Large">
            <header>Order Details</header>
            <List>
              {userList.map((user, index) => (
                <ListItem key={index}>
                  <User title={user.title} name={user.name} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ListPage;
