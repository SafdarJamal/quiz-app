import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Loader from './components/Loader.jsx';
import Quiz from './components/Quiz.jsx';

const API =
  'https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: null,
      isQuizStart: false
    };

    this.setData = this.setData.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
  }

  setData(result) {
    this.setState({ quizData: result.results });
  }

  componentDidMount() {
    fetch(API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result), 1000))
      .catch(error => console.log('API error', error));
    // Todo: Add a function to indicate the user the  api has problem.
  }

  startQuiz() {
    this.setState({ isQuizStart: true });
  }

  render() {
    const { quizData, isQuizStart } = this.state;
    console.log(quizData);

    return (
      <Fragment>
        <Header />
        {!quizData && <Loader />}
        {quizData && !isQuizStart && <Main startQuiz={this.startQuiz} />}
        {isQuizStart && <Quiz quizData={quizData} />}
      </Fragment>
    );
  }
}

export default App;
