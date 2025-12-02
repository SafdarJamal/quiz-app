import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
import { useTheme } from '../ThemeProvider';

import ShareButton from '../ShareButton';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
}) => {
  const { theme } = useTheme();
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment inverted={theme === 'dark'}>
      <Header as="h1" textAlign="center" block inverted={theme === 'dark'}>
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block inverted={theme === 'dark'}>
        Grade: {grade}
      </Header>
      <Header as="h3" textAlign="center" block inverted={theme === 'dark'}>
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block inverted={theme === 'dark'}>
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block inverted={theme === 'dark'}>
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center" block inverted={theme === 'dark'}>
        Passing Score: 60%
      </Header>
      <Header as="h3" textAlign="center" block inverted={theme === 'dark'}>
        Time Taken:{' '}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button
          primary={theme !== 'dark'}
          basic={theme === 'dark'}
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color={theme === 'dark' ? 'grey' : 'teal'}
          content="Back to Home"
          onClick={resetQuiz}
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

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Stats;
