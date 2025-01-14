import React, { useState, useEffect } from 'react';

import Layout from '../Layout'; // Layout handles the Header
import Loader from '../Loader';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';
import '../../index.css';

import { shuffle } from '../../utils';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference on app load
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode); // Προσθήκη/Αφαίρεση dark-mode στο body
      localStorage.setItem('dark-mode', newMode); // Αποθήκευση προτίμησης
      return newMode;
    });
  };
  

  const startQuiz = (data, countdownTime) => {
    setLoading(true);
    setLoadingMessage({
      title: 'Loading your quiz...',
      message: "It won't be long!",
    });
    setCountdownTime(countdownTime);

    setTimeout(() => {
      setData(data);
      setIsQuizStarted(true);
      setLoading(false);
    }, 1000);
  };

  const endQuiz = (resultData) => {
    setLoading(true);
    setLoadingMessage({
      title: 'Fetching your results...',
      message: 'Just a moment!',
    });

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  const replayQuiz = () => {
    setLoading(true);
    setLoadingMessage({
      title: 'Getting ready for round two.',
      message: "It won't take long!",
    });

    const shuffledData = shuffle(data);
    shuffledData.forEach((element) => {
      element.options = shuffle(element.options);
    });

    setData(shuffledData);

    setTimeout(() => {
      setIsQuizStarted(true);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setLoading(true);
    setLoadingMessage({
      title: 'Loading the home screen.',
      message: 'Thank you for playing!',
    });

    setTimeout(() => {
      setData(null);
      setCountdownTime(null);
      setIsQuizStarted(false);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        {loading && <Loader {...loadingMessage} />}
        {!loading && !isQuizStarted && !isQuizCompleted && (
          <Main startQuiz={startQuiz} />
        )}
        {!loading && isQuizStarted && (
          <Quiz
            data={data}
            countdownTime={countdownTime}
            endQuiz={endQuiz}
            darkMode={darkMode} // Περνάμε το darkMode στο Quiz
          />
        )}
        {!loading && isQuizCompleted && (
          <Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
        )}
      </Layout>
    </div>
  );
};

export default App;
