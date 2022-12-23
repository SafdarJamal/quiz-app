import React from 'react';
import CountdownComponent from './index';

export default {
  title: 'Components/Countdown',
  component: CountdownComponent,
};

export const Countdown = () => (
  <CountdownComponent
    countdownTime={120}
    timeOver={() => {}}
    setTimeTaken={() => {}}
  />
);
