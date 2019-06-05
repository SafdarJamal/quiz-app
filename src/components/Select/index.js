import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default props => (
  <Dropdown
    placeholder="Select Quiz Type"
    onChange={handleChange}
    fluid
    selection
    options={props.options}
  />
);

const handleChange = (e, { value }) => console.log(value);
