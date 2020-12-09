import React, { useState, useEffect } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { timeConverter } from '../../utils';

const Countdown = ({ countdownTime, timesUp, setTakenTime }) => {
  const totalTime = countdownTime * 60000;
  const [timerTime, setTimerTime] = useState(countdownTime * 60000);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          title: 'YOUR TIME IS UP',
          type: 'info',
          timer: 5000,
          onClose: timesUp
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTakenTime(totalTime - timerTime);
    };
  }, []);

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

export default Countdown;
