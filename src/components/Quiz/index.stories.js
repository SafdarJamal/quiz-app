// Button.stories.js | Button.stories.jsx

import React from 'react';

import QuizComponent from './index';
import data from './mock.json';

export default {
  component: QuizComponent,
  title: 'Components/Quiz',
} 

export const Quiz = () => <QuizComponent countdownTime={1000} data={data} endQuiz={()=>{}}/>;