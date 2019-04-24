import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import logo from '../assets/logo.png';

export default () => (
  <Segment clearing inverted raised>
    <Header as="h2" floated="left" color="blue">
      <img src={logo} alt="Quiz App" />
      Quiz App
    </Header>
  </Segment>
);
