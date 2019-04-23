import React, { Component } from 'react';
import { Container, Segment, Label, Header, Button } from 'semantic-ui-react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Result
            </Label>
            <Header as="h1" textAlign="center" block>
              Congratulations, YOU PASSED!
              {/* Sorry, YOU FAILED! */}
            </Header>
            <Header as="h3" textAlign="center" block>
              Passing Score: 60
            </Header>
            <Header as="h3" textAlign="center" block>
              Total Questions: 10
            </Header>
            <Header as="h3" textAlign="center" block>
              Correct Answers: 7
            </Header>
            <Header as="h3" textAlign="center" block>
              Your Score: 70
            </Header>
            <div style={{ marginTop: '25px', marginBottom: '8px' }}>
              <Button primary size="large">
                Retake Quiz
              </Button>
              <Button color="teal" size="large">
                Back to Home
              </Button>
            </div>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Result;
