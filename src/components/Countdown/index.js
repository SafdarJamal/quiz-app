import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { timeConverter } from '../../utils';

const Countdown = ({ countdownTime, timeOver, setTimeTaken }) => {
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
          title: `Your Time's Up`,
          icon: 'info',
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime)
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
    <Button.Group size="massive" basic floated="right">
      <Popup
        content="Hours"
        trigger={<Button active>{hours}</Button>}
        position="bottom left"
      />
      <Popup
        content="Minutes"
        trigger={<Button active>{minutes}</Button>}
        position="bottom left"
      />
      <Popup
        content="Seconds"
        trigger={<Button active>{seconds}</Button>}
        position="bottom left"
      />
    </Button.Group>
  );
};

Countdown.propTypes = {
  countdownTime: PropTypes.number.isRequired,
  timeOver: PropTypes.func.isRequired,
  setTimeTaken: PropTypes.func.isRequired
};

export default Countdown;
