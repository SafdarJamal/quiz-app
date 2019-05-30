import React, { Component } from 'react';
import {
  Container,
  Segment,
  Label,
  Header,
  Button,
  Icon
} from 'semantic-ui-react';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: props.correctAnswers,
      userScore: (props.correctAnswers * 100) / 10
    };
  }

  render() {
    const { correctAnswers, userScore } = this.state;
    const { retakeQuiz, backToHome } = this.props;
    // console.log(userScore);

    let remarks = 'Sorry, YOU FAILED!';
    if (userScore >= 60) {
      remarks = 'Congratulations, YOU PASSED!';
    }

    return (
      <div>
        <Container>
          <Segment raised>
            <Label attached="top" size="huge">
              Result
            </Label>
            <br />
            <br />
            <Header as="h1" textAlign="center" block>
              {remarks}
            </Header>
            <Header as="h3" textAlign="center" block>
              Passing Score: 60
            </Header>
            <Header as="h3" textAlign="center" block>
              Total Questions: 10
            </Header>
            <Header as="h3" textAlign="center" block>
              Correct Answers: {correctAnswers}
            </Header>
            <Header as="h3" textAlign="center" block>
              Your Score: {userScore}
            </Header>
            <div style={{ marginTop: '25px', marginBottom: '8px' }}>
              <Button primary size="big" onClick={retakeQuiz}>
                Retake Quiz
                <Icon corner="top right" name="redo" />
              </Button>
              <Button color="teal" size="big" onClick={backToHome}>
                Back to Home
                <Icon corner="top right" name="home" />
              </Button>
            </div>
          </Segment>
          <br />
        </Container>
      </div>
    );
  }
}

export default Result;
