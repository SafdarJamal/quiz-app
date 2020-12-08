import React, { useState } from 'react';

import Loader from '../Loader';
import Layout from '../Layout';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  const startQuiz = (data, countdownTime) => {
    setLoading(true);
    setCountdownTime(countdownTime);

    setTimeout(() => {
      setData(data);
      setIsQuizStarted(true);
      setLoading(false);
    }, 1000);
  };

  const endQuiz = resultData => {
    setLoading(true);

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  const retakeQuiz = () => {
    setLoading(true);

    setTimeout(() => {
      setIsQuizStarted(true);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  const backToHome = () => {
    setLoading(true);

    setTimeout(() => {
      setData(null);
      setCountdownTime(null);
      setIsQuizStarted(false);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      {!isQuizStarted && <Main startQuiz={startQuiz} />}
      {isQuizStarted && (
        <Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
      )}
      {isQuizCompleted && (
        <Result
          {...resultData}
          retakeQuiz={retakeQuiz}
          backToHome={backToHome}
        />
      )}
    </Layout>
  );
};

export default App;
