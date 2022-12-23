import React from 'react';
import Countdown from './index';

export default {
  title: 'Components/Countdown',
  component: Countdown,
};

export const CountdownTimer = () => (
  <Countdown countdownTime={1000} setTimeTaken={() => {}} />
);
