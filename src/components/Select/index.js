import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const Select = props => (
  <Dropdown
    placeholder={props.text}
    options={props.options}
    fluid
    selection
    onChange={(e, { value }) => props.setValue(value)}
  />
);

export default Select;
