import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const Select = ({ name, text, options, onChange }) => (
  <Dropdown
    fluid
    selection
    placeholder={text}
    options={options}
    onChange={(e, { value }) => onChange(name, value)}
  />
);

export default Select;
