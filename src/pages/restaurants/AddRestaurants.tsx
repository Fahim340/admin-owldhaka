import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const AddRestaurants = () => {
  const [checkbox, setCheckbox] = useState({
    1: false,
    2: false,
    3: false,
  });

  const onChangeCheckbox = (value: boolean, name: number) => {
    setCheckbox({ ...checkbox, [name]: value });
  };
  const onChangeRadio = (_value: any) => {
    // value will be item value
  };
  return (
    <>
      <SEO title="Input" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Input status</header>
            <CardBody>
              <Input fullWidth size="Small">
                <input type="text" placeholder="Name" />
              </Input>
              <Input fullWidth size="Medium">
                <input type="text" placeholder="Category" />
              </Input>
              <Input fullWidth size="Medium">
                <input type="text" placeholder="Contact Number" />
              </Input>
              <Input fullWidth size="Medium">
                <input type="text" placeholder="Closing Time" />
              </Input>
              <Input fullWidth size="Large">
                <input type="text" placeholder="Location" />
              </Input>
              <Input fullWidth shape="Rectangle">
                <input type="text" placeholder="Address" />
              </Input>
              
              
              
              
            </CardBody>
          </Card>
        </Col>
        
      </Row>
    </>
  );
};
export default AddRestaurants;
