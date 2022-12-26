import React from 'react';
import QNAComponent from './QNA';

export default {
  title: 'Components/Result/QNA',
  component: QNAComponent,
};

export const QNA = () => (
  <QNAComponent
    questionsAndAnswers={[
      {
        question: 'he.decode(data[questionIndex].question)',
        user_answer: 'userSlectedAns',
        correct_answer: 'he.decode(data[questionIndex].correct_answer)',
        point: 1,
      },
    ]}
  />
);
