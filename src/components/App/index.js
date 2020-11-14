import React, { Fragment, useState } from 'react';

import Header from '../Header';
import Main from '../Main';
import Quiz from '../Quiz';
import Loader from '../Loader';

const App = () => {
  const [isQuizStart, setIsQuizStart] = useState(false);
  const [API, setAPI] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const startQuiz = selectedValues => {
    const { category, numOfQ, difficulty, type, time } = selectedValues;
    const API = `https://opentdb.com/api.php?amount=${numOfQ}&category=${category}&difficulty=${difficulty}&type=${type}`;

    setIsQuizStart(true);
    setAPI(API);
    setCountdownTime(time);
  };

  const backToHome = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsQuizStart(false);
      setAPI(null);
      setCountdownTime(null);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Fragment>
      <Header />
      {!isLoading && !isQuizStart && <Main startQuiz={startQuiz} />}
      {!isLoading && isQuizStart && (
        <Quiz API={API} countdownTime={countdownTime} backToHome={backToHome} />
      )}
      {isLoading && <Loader />}
    </Fragment>
  );
};

export default App;
