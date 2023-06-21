import CountdownComponent from './index';

export default {
  title: 'Components/Countdown',
  component: CountdownComponent,
};

const Template = args => <CountdownComponent {...args} />;
export const Countdown = Template.bind({});

Countdown.args = {
  countdownTime: 120,
  timeOver: () => {},
  setTimeTaken: () => {},
};
