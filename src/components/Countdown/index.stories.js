// Button.stories.js | Button.stories.jsx

import React from 'react';

import Countdown from './index';

export default {
  component: Countdown,
  title: 'Components/Countdown',
} 

export const CountdownTimer = () => <Countdown countdownTime={1000} setTimeTaken={ () => {} }/>;