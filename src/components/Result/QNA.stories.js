import React from 'react';
import QNAComponent from './QNA';

export default {
  title: 'Components/Result/QNA',
  component: QNAComponent,
};

const Template = args => <QNAComponent {...args} />;
export const QNA = Template.bind({});

QNA.args = {
  questionsAndAnswers: [
    {
      question:
        'The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:',
      user_answer: 'HD Graphics 500',
      correct_answer: 'HD Graphics 500',
      point: 1,
    },
    {
      question:
        'While Apple was formed in California, in which western state was Microsoft founded?',
      user_answer: 'Arizona',
      correct_answer: 'New Mexico',
      point: 0,
    },
    {
      question:
        'On Twitter, what was the original character limit for a Tweet?',
      user_answer: '140',
      correct_answer: '140',
      point: 1,
    },
    {
      question: 'What internet protocol was documented in RFC 1459?',
      user_answer: 'FTP',
      correct_answer: 'IRC',
      point: 0,
    },
    {
      question:
        'If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.',
      user_answer: 'Binary',
      correct_answer: 'Binary',
      point: 1,
    },
  ],
};
