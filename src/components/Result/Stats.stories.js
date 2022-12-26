import React from 'react';
import StatsComponent from './Stats';

export default {
  title: 'Components/Result/Stats',
  component: StatsComponent,
};

export const Stats = () => (
  <StatsComponent
    totalQuestions={5}
    correctAnswers={4}
    timeTaken={100 * 1000}
    replayQuiz={() => {}}
    resetQuiz={() => {}}
  />
);
