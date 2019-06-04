import React from 'react';
import { Container, Segment, Placeholder } from 'semantic-ui-react';

export default () => (
  <Container>
    <Segment raised>
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="full" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  </Container>
);
