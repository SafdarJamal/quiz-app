import React from 'react';
import ResultComponent from './index';

export default {
  title: 'Components/Result',
  component: ResultComponent,
};

const Template = args => <ResultComponent {...args} />;
export const Result = Template.bind({});

Result.args = {
  totalQuestions: 5,
  correctAnswers: 4,
  timeTaken: 100 * 1000,
  questionsAndAnswers: [
    {
      question: 'he.decode(data[questionIndex].question)',
      user_answer: 'userSlectedAns',
      correct_answer: 'he.decode(data[questionIndex].correct_answer)',
      point: 1,
    },
  ],
  replayQuiz: () => {},
  resetQuiz: () => {},
};
