import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
