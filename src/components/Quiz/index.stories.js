import React from 'react';
import QuizComponent from './index';
import data from './mock.json';

export default {
  title: 'Components/Quiz',
  component: QuizComponent,
};

export const Quiz = () => (
  <QuizComponent countdownTime={1000} data={data} endQuiz={() => {}} />
);
