import React, { Fragment, useState } from 'react';

import Header from '../Header';
import Main from '../Main';
import Quiz from '../Quiz';
import Loader from '../Loader';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [API, setAPI] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const startQuiz = selectedValues => {
    const { category, numOfQ, difficulty, type, time } = selectedValues;
    const API = `https://opentdb.com/api.php?amount=${numOfQ}&category=${category}&difficulty=${difficulty}&type=${type}`;

    setIsQuizStarted(true);
    setAPI(API);
    setCountdownTime(time);
  };

  const backToHome = () => {
    setLoading(true);

    setTimeout(() => {
      setIsQuizStarted(false);
      setAPI(null);
      setCountdownTime(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <Fragment>
      <Header />
      {!loading && !isQuizStarted && <Main startQuiz={startQuiz} />}
      {!loading && isQuizStarted && (
        <Quiz API={API} countdownTime={countdownTime} backToHome={backToHome} />
      )}
      {loading && <Loader />}
    </Fragment>
  );
};

export default App;
