import ResultComponent from './index';
import data from './mockData.json';

export default {
  title: 'Components/Result',
  component: ResultComponent,
};

const Template = args => <ResultComponent {...args} />;
export const Result = Template.bind({});

Result.args = {
  totalQuestions: 5,
  correctAnswers: 3,
  timeTaken: 100 * 1000,
  questionsAndAnswers: data,
  replayQuiz: () => {},
  resetQuiz: () => {},
};
