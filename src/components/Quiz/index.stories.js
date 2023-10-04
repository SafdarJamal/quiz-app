import QuizComponent from './index';
import data from './mock.json';

export default {
  title: 'Components/Quiz',
  component: QuizComponent,
};

const Template = args => <QuizComponent {...args} />;
export const Quiz = Template.bind({});

Quiz.args = {
  data,
  countdownTime: 120,
  endQuiz: () => {},
};
