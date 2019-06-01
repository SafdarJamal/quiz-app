import React, { Component } from 'react';
import { Container, Segment, Label, Header, Button } from 'semantic-ui-react';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: props.correctAnswers,
      userScore: (props.correctAnswers * 100) / 10
    };

    this.timeConverter = this.timeConverter.bind(this);
  }

  timeConverter(value) {
    const hours = ('0' + Math.floor((value / 3600000) % 60)).slice(-2);
    const minutes = ('0' + Math.floor((value / 60000) % 60)).slice(-2);
    const seconds = ('0' + (Math.floor((value / 1000) % 60) % 60)).slice(-2);
    // console.log(hours, minutes, seconds);

    return {
      hours,
      minutes,
      seconds
    };
  }

  render() {
    const { correctAnswers, userScore } = this.state;
    const { retakeQuiz, backToHome, takenTime } = this.props;
    // console.log(userScore);

    const result = this.timeConverter(
      takenTime.totalTime - takenTime.timerTime
    );
    const timeTakes = `${result.hours} : ${result.minutes} : ${result.seconds}`;

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
            <Header as="h3" textAlign="center" block>
              {`Time Takes: ${timeTakes}`}
            </Header>
            <div style={{ marginTop: '25px', marginBottom: '8px' }}>
              <Button
                primary
                content="Retake Quiz"
                onClick={retakeQuiz}
                size="big"
                icon="redo"
                labelPosition="right"
              />
              <Button
                color="teal"
                content="Back to Home"
                onClick={backToHome}
                size="big"
                icon="home"
                labelPosition="right"
              />
            </div>
          </Segment>
          <br />
        </Container>
      </div>
    );
  }
}

export default Result;
