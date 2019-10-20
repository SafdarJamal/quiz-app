import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import ShareButton from '../ShareButton';

import { calculateGrade } from '../../utils/calculateGrade';
import { timeConverter } from '../../utils/timeConverter';

const Stats = props => {
  const {
    totalQuestions,
    correctAnswers,
    timeTakesToComplete,
    retakeQuiz,
    backToHome
  } = props;

  const score = Number(((correctAnswers * 100) / totalQuestions).toFixed(2));
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(
    timeTakesToComplete.totalTime - timeTakesToComplete.timerTime
  );

  return (
    <Segment>
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
        Your Score: {score}%
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
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="Back to Home"
          onClick={backToHome}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
        <ShareButton />
      </div>
    </Segment>
  );
};

export default Stats;
