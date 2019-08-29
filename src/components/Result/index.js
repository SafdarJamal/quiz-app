import React, { Component } from 'react';
import { Container, Segment, Label, Header, Button } from 'semantic-ui-react';

import { timeConverter } from '../../utils/timeConverter';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userScore: Number(
        ((props.correctAnswers * 100) / props.totalQuestions).toFixed(2)
      )
    };
  }

  render() {
    const { userScore } = this.state;
    const {
      totalQuestions,
      correctAnswers,
      takenTime,
      questionAnswers,
      retakeQuiz,
      backToHome
    } = this.props;
    // console.log(userScore);
    console.log(questionAnswers);

    const { hours, minutes, seconds } = timeConverter(
      takenTime.totalTime - takenTime.timerTime
    );

    let remarks = 'Sorry, YOU FAILED!';
    if (userScore >= 60) {
      remarks = 'Congratulations, YOU PASSED!';
    }

    const calcGrade = parseInt(userScore);
    let grade;

    if (calcGrade >= 97) {
      grade = 'A+';
    } else if (calcGrade >= 93 && calcGrade <= 96) {
      grade = 'A';
    } else if (calcGrade >= 90 && calcGrade <= 92) {
      grade = 'A-';
    } else if (calcGrade >= 87 && calcGrade <= 89) {
      grade = 'B+';
    } else if (calcGrade >= 83 && calcGrade <= 86) {
      grade = 'B';
    } else if (calcGrade >= 80 && calcGrade <= 82) {
      grade = 'B-';
    } else if (calcGrade >= 77 && calcGrade <= 79) {
      grade = 'C+';
    } else if (calcGrade >= 73 && calcGrade <= 76) {
      grade = 'C';
    } else if (calcGrade >= 70 && calcGrade <= 72) {
      grade = 'C-';
    } else if (calcGrade >= 67 && calcGrade <= 69) {
      grade = 'D+';
    } else if (calcGrade >= 63 && calcGrade <= 66) {
      grade = 'D';
    } else if (calcGrade >= 60 && calcGrade <= 62) {
      grade = 'D-';
    } else if (calcGrade < 60) {
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
              Your Score: {userScore}%
            </Header>
            <Header as="h3" textAlign="center" block>
              Passing Score: 60%
            </Header>
            <Header as="h3" textAlign="center" block>
              Time Takes: {`${hours} : ${minutes} : ${seconds}`}
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
