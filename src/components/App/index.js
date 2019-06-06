import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Main from '../Main';
import Loader from '../Loader';
import Quiz from '../Quiz';

import { PATH_BASE, AMOUNT, CATEGORY, DIFFICULTY, TYPE } from '../../api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isQuizStart: false,
      API: null,
      countdownTime: null,
      isLoading: false
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  startQuiz(selectedValues) {
    // console.log(selectedValues);

    const API = `${PATH_BASE + AMOUNT + selectedValues[1]}&${CATEGORY +
      selectedValues[0]}&${DIFFICULTY + selectedValues[2]}&${TYPE +
      selectedValues[3]}`;

    this.setState({ isQuizStart: true, API, countdownTime: selectedValues[4] });
  }

  backToHome() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isQuizStart: false,
        API: null,
        countdownTime: null
      });
    }, 1000);
  }

  render() {
    const { isQuizStart, API, countdownTime, isLoading } = this.state;

    return (
      <Fragment>
        <Header />
        {!isLoading && !isQuizStart && <Main startQuiz={this.startQuiz} />}
        {!isLoading && isQuizStart && (
          <Quiz
            API={API}
            countdownTime={countdownTime}
            backToHome={this.backToHome}
          />
        )}
        {isLoading && <Loader />}
      </Fragment>
    );
  }
}

export default App;
