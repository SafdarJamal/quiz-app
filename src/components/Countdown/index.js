import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import '../../index.css';

import { timeConverter } from '../../utils';

const Countdown = ({ countdownTime, timeOver, setTimeTaken, darkMode }) => {
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          icon: 'info',
          title: `Oops! Time's up.`,
          text: 'See how you did!',
          confirmButtonText: 'Check Results',
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime),
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };

    // eslint-disable-next-line
  }, [timerTime]);

  return (
    <div
      className={`timer-container ${darkMode ? 'dark-mode' : ''}`}
      style={{
        color: darkMode ? '#e0e0e0' : '#000000',
        fontSize: '2rem', // Adjust as needed
        textAlign: 'center',
      }}
    >
      <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
    </div>
  );
};

Countdown.propTypes = {
  countdownTime: PropTypes.number.isRequired,
  timeOver: PropTypes.func.isRequired,
  setTimeTaken: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Countdown;
