import React from 'react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';

const Offline = () => {
  return (
    <Container>
      <Segment placeholder>
        <Header icon>
          <Icon name="unlink" />
          <br />
          It looks like you're offline, please check your internet connection.
        </Header>
      </Segment>
    </Container>
  );
};

export default Offline;
