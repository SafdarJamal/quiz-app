import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Main from '../Main';
import Placeholder from '../Placeholder';
import Quiz from '../Quiz';

import { PATH_BASE, AMOUNT, CATEGORY, DIFFICULTY, TYPE } from '../../api';

const API = `${PATH_BASE}${AMOUNT}12&${CATEGORY}&${DIFFICULTY}&${TYPE}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: null,
      isQuizStart: false
    };

    this.setData = this.setData.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.backToHomeHelper = this.backToHomeHelper.bind(this);
  }

  setData(result) {
    console.log(result.results);
    this.setState({ quizData: result.results });
  }

  componentDidMount() {
    fetch(API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result), 500))
      .catch(error => console.log('API error', error));
  }

  startQuiz(selectedValues) {
    console.log(selectedValues);
    this.setState({ isQuizStart: true });
  }

  backToHome() {
    this.setState({ quizData: null, isQuizStart: false });
    setTimeout(() => {
      this.backToHomeHelper();
    }, 1000);
  }

  backToHomeHelper() {
    fetch(API)
      .then(respone => respone.json())
      .then(result => this.setData(result))
      .catch(error => console.log('API error', error));
  }

  render() {
    const { quizData, isQuizStart } = this.state;
    // console.log(quizData);

    return (
      <Fragment>
        <Header />
        {!quizData && <Placeholder />}
        {quizData && !isQuizStart && <Main startQuiz={this.startQuiz} />}
        {isQuizStart && (
          <Quiz quizData={quizData} backToHome={this.backToHome} />
        )}
      </Fragment>
    );
  }
}

export default App;
