import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import logo from '../assets/logo.svg';

export default () => (
  <Segment clearing inverted>
    <Header as="h1" floated="left" color="blue">
      <img src={logo} alt="Quiz App" />
      Quiz App
    </Header>
  </Segment>
);
