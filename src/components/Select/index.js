import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const Select = ({ text, options, setValue }) => (
  <Dropdown
    placeholder={text}
    options={options}
    fluid
    selection
    onChange={(e, { value }) => setValue(value)}
  />
);

export default Select;
