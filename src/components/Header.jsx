import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default () => (
  <Segment clearing>
    <Header as="h1" floated="left" color="grey">
      <img src={require('../logo.svg')} alt="" />
      Quiz App
    </Header>
  </Segment>
);
