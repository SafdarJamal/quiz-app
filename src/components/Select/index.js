import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default props => (
  <Dropdown
    placeholder={props.text}
    options={props.options}
    fluid
    selection
    onChange={(e, { value }) => props.setValue(value)}
  />
);
