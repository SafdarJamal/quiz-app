import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

export default () => (
  <Container>
    <Segment placeholder>
      <Header icon>
        <Icon name="unlink" />
        <br />
        It looks like you're offline, Please check your internet connection.
      </Header>
    </Segment>
  </Container>
);
