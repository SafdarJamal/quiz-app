import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 600000
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert('Countdown ended');
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    // console.log(timerTime);

    if (!timerOn) {
      if (input === 'incHours' && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === 'decHours' && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === 'incMinutes' && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === 'incSeconds' && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  componentDidMount() {
    this.startTimer();
  }

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
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
