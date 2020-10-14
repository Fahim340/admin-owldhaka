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

const AddFoodItem = () => {
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
            <header>Add Food Item</header>
            <CardBody>
              <Input fullWidth size="Small">
                <input type="text" placeholder="Item Name" />
              </Input>
              <Input fullWidth size="Medium">
                <input type="text" placeholder="Food Category" />
              </Input>
              <Input fullWidth size="Medium">
                <input type="text" placeholder="Restaturant Name"/>
              </Input>
              <Input fullWidth size="Medium">
              <input type="file" id="img" name="img" accept="image/*" />
              <label for ="fileupload">  ( Upload Food Image )</label>
              </Input>
              <Input fullWidth shape="Round">
                <textarea rows={5} placeholder="Description"/>
              </Input>
              
              
              
              
              
            </CardBody>
          </Card>
        </Col>
        
      </Row>
    </>
  );
};
export default AddFoodItem;
