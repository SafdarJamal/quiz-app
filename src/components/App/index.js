import React, { Fragment, useState } from 'react';
import Swal from 'sweetalert2';

import Loader from '../Loader';
import Header from '../Header';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';
import Offline from '../Offline';

import { getRandomNumber } from '../../utils';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [countdownTime, setCountdownTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [resultData, setResultData] = useState(null);
  const [isOffline, setIsOffline] = useState(false);

  const startQuiz = selectedValues => {
    const { category, numOfQ, difficulty, type, time } = selectedValues;
    const API = `https://opentdb.com/api.php?amount=${numOfQ}&category=${category}&difficulty=${difficulty}&type=${type}`;

    setLoading(true);
    setCountdownTime(time);
    getData(API);
  };

  const getData = API => {
    fetch(API)
      .then(respone => respone.json())
      .then(data => setTimeout(() => handleData(data.results), 1000))
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setIsOffline(true);
            console.log('Connection problem => ', error.message);
          } else {
            setError(error);
            console.log('API problem => ', error.message);
          }
        }, 1000)
      );
  };

  const handleData = data => {
    if (data.length === 0) {
      const message =
        "The API doesn't have enough questions for your query<br />" +
        '(ex. Asking for 50 questions in a category that only has 20).' +
        '<br /><br />Please change number of questions, difficulty level ' +
        'or type of questions.';

      return Swal.fire({
        title: 'Oops...',
        html: message,
        type: 'error',
        timer: 10000,
        onClose: backToHome
      });
    }

    data.forEach(element => {
      element.options = [...element.incorrect_answers];
      element.options.splice(getRandomNumber(0, 3), 0, element.correct_answer);
    });

    setData(data);
    setIsQuizStarted(true);
    setLoading(false);
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
      setIsQuizStarted(false);
      setIsQuizCompleted(false);
      setCountdownTime(null);
      setData(null);
      setError(null);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  if (loading) return <Loader />;
  if (error) return `An error has occurred: ${error.message}`;
  if (isOffline) return <Offline />;

  return (
    <Fragment>
      <Header />
      {!isQuizStarted && <Main startQuiz={startQuiz} />}
      {isQuizStarted && (
        <Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
      )}
      {isQuizCompleted && (
        <Result
          totalQuestions={data.length}
          {...resultData}
          retakeQuiz={retakeQuiz}
          backToHome={backToHome}
        />
      )}
    </Fragment>
  );
};

export default App;
