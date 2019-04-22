import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Loader from './components/Loader.jsx';

// const API = 'https://opentdb.com/api.php?amount=10';
const C_API =
  'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: null
    };

    this.setData = this.setData.bind(this);
  }

  setData(result) {
    this.setState({ quizData: result.results });
  }

  componentWillMount() {
    fetch(C_API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result), 1000))
      .catch(error => console.log('API error', error));
  }

  render() {
    const { quizData } = this.state;
    console.log(quizData);
    return (
      <React.Fragment>
        <Header />
        {!quizData && <Loader />}
        {quizData && <Main />}
      </React.Fragment>
    );
  }
}

export default App;
