import React, { Component } from 'react';
import { Container, Segment, Label, Header, Button } from 'semantic-ui-react';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userScore: Number(
        ((props.correctAnswers * 100) / props.totalQuestions).toFixed(2)
      )
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
    const { userScore } = this.state;
    const {
      totalQuestions,
      correctAnswers,
      takenTime,
      retakeQuiz,
      backToHome
    } = this.props;
    // console.log(userScore);

    const result = this.timeConverter(
      takenTime.totalTime - takenTime.timerTime
    );
    const timeTakes = `${result.hours} : ${result.minutes} : ${result.seconds}`;

    let remarks = 'Sorry, YOU FAILED!';
    if (userScore >= 60) {
      remarks = 'Congratulations, YOU PASSED!';
    }

    let grade;
    if (userScore >= 97) {
      grade = 'A+';
    } else if (userScore >= 93 && userScore <= 96) {
      grade = 'A';
    } else if (userScore >= 90 && userScore <= 92) {
      grade = 'A-';
    } else if (userScore >= 87 && userScore <= 89) {
      grade = 'B+';
    } else if (userScore >= 83 && userScore <= 86) {
      grade = 'B';
    } else if (userScore >= 80 && userScore <= 82) {
      grade = 'B-';
    } else if (userScore >= 77 && userScore <= 79) {
      grade = 'C+';
    } else if (userScore >= 73 && userScore <= 76) {
      grade = 'C';
    } else if (userScore >= 70 && userScore <= 72) {
      grade = 'C-';
    } else if (userScore >= 67 && userScore <= 69) {
      grade = 'D+';
    } else if (userScore >= 63 && userScore <= 66) {
      grade = 'D';
    } else if (userScore >= 60 && userScore <= 62) {
      grade = 'D-';
    } else if (userScore < 60) {
      grade = 'F';
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
            <Header as="h2" textAlign="center" block>
              Grade: {grade}
            </Header>
            <Header as="h3" textAlign="center" block>
              Total Questions: {totalQuestions}
            </Header>
            <Header as="h3" textAlign="center" block>
              Correct Answers: {correctAnswers}
            </Header>
            <Header as="h3" textAlign="center" block>
              Passing Score: 60 out of 100
            </Header>
            <Header as="h3" textAlign="center" block>
              Your Score: {userScore}
            </Header>
            <Header as="h3" textAlign="center" block>
              Time Takes: {timeTakes}
            </Header>
            <div style={{ marginTop: 35 }}>
              <Button
                primary
                content="Retake Quiz"
                onClick={retakeQuiz}
                size="big"
                icon="redo"
                labelPosition="right"
                style={{ marginRight: 15, marginBottom: 8 }}
              />
              <Button
                color="teal"
                content="Back to Home"
                onClick={backToHome}
                size="big"
                icon="home"
                labelPosition="right"
                style={{ marginBottom: 8 }}
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
