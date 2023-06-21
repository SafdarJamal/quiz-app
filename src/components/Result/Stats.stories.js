import StatsComponent from './Stats';

export default {
  title: 'Components/Result/Stats',
  component: StatsComponent,
};

const Template = args => <StatsComponent {...args} />;
export const Stats = Template.bind({});

Stats.args = {
  totalQuestions: 5,
  correctAnswers: 4,
  timeTaken: 100 * 1000,
  replayQuiz: () => {},
  resetQuiz: () => {},
};
