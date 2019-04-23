import React, { Component } from 'react';
import { Button, Header, Icon, Segment, Container } from 'semantic-ui-react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Segment placeholder>
            <Header icon>
              <Icon name="search" />
              We don't have any documents matching your query.
            </Header>
            <Segment.Inline>
              <Button primary>Clear Query</Button>
              <Button>Add Document</Button>
            </Segment.Inline>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Result;
