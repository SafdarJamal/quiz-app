import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Swal from 'sweetalert2';

class Countdown extends Component {
  constructor(props) {
    super(props);

    const countdownTime = props.countdownTime * 60000;

    this.state = {
      timerStart: 0,
      timerTime: countdownTime,
      totalTime: countdownTime
    };
  }

  startTimer() {
    this.timer = setInterval(() => {
      // const { timerTime } = this.state;
      // console.log(timerTime);
      const newTime = this.state.timerTime - 1000;

      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        Swal.fire({
          title: 'YOUR TIME IS UP',
          type: 'info',
          timer: 5000,
          onClose: () => {
            this.props.timesUp();
          }
        });
      }
    }, 980);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    const { timerTime, totalTime } = this.state;
    this.props.timeAmount(timerTime, totalTime);
  }

  render() {
    const { timerTime } = this.state;

    const hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2);
    const minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2);
    const seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(
      -2
    );

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
  }
}

export default Countdown;
