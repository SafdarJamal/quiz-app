import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess'
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu'
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano'
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian'
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt'
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune'
  },
  {
    key: 'Justen Kitsun',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune'
  },
  {
    key: 'Jenny Hes',
    text: 'Jenny Hess',
    value: 'Jenny Hess'
  },
  {
    key: 'Elliot F',
    text: 'Elliot Fu',
    value: 'Elliot Fu'
  },
  {
    key: 'Stevie Felician',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano'
  },
  {
    key: 'Christia',
    text: 'Christian',
    value: 'Christian'
  },
  {
    key: 'Mat',
    text: 'Matt',
    value: 'Matt'
  },
  {
    key: 'Justen Kitsu',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune'
  },
  {
    key: 'Justen Kitune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune'
  }
];

export default () => (
  <Dropdown
    placeholder="Select Quiz Type"
    fluid
    selection
    options={friendOptions}
  />
);
