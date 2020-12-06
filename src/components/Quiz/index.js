import React, { useState, useEffect } from 'react';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu,
  Header
} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import he from 'he';

import Loader from '../Loader';
import Countdown from '../Countdown';
import Result from '../Result';
import Offline from '../Offline';

import { getRandomNumber } from '../../utils';

const Quiz = ({ API, countdownTime, backToHome }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [time, setTime] = useState({});
  const [loadingResult, setLoadingResult] = useState(false);
  const [isNewQuizStarted, setIsNewQuizStarted] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    fetch(API)
      .then(respone => respone.json())
      .then(data => setTimeout(() => handleData(data.results), 1000))
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setIsOffline(true);
            console.log('Connection problem =>', error.message);
          } else {
            setIsOffline(true);
            console.log('API problem =>', error.message);
          }
        }, 1000)
      );
  }, []);

  const manipulateOptions = (data, questionIndex) => {
    const options = [...data[questionIndex].incorrect_answers];
    options.splice(
      getRandomNumber(0, 3),
      0,
      data[questionIndex].correct_answer
    );

    return options;
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

    setData(data);
    setLoading(false);
    setOptions(manipulateOptions(data, questionIndex));
  };

  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
  };

  const handleNext = () => {
    let point = 0;
    if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point
    });

    if (questionIndex === data.length - 1) {
      setCorrectAnswers(correctAnswers + point);
      setUserSlectedAns(null);
      setLoading(true);
      setIsQuizCompleted(true);
      setQuestionIndex(0);
      setOptions(null);
      setQuestionsAndAnswers(qna);
      setLoadingResult(true);

      return;
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
    setOptions(manipulateOptions(data, questionIndex + 1));
    setQuestionsAndAnswers(qna);
  };

  const timesUp = () => {
    setUserSlectedAns(null);
    setLoading(true);
    setIsQuizCompleted(true);
    setQuestionIndex(0);
    setOptions(null);
    setLoadingResult(true);
  };

  const timeAmount = (timerTime, totalTime) => {
    setTime({
      timerTime,
      totalTime
    });
  };

  const retakeQuiz = () => {
    setCorrectAnswers(0);
    setIsQuizCompleted(false);
    setQuestionsAndAnswers([]);
    setIsNewQuizStarted(true);
    setOptions(manipulateOptions(data, questionIndex));
  };

  if (loadingResult) {
    setTimeout(() => {
      setLoadingResult(false);
    }, 2000);
  }

  if (isNewQuizStarted) {
    setTimeout(() => {
      setLoading(false);
      setIsNewQuizStarted(false);
    }, 1000);
  }

  return (
    <Item.Header>
      {!isOffline && !isQuizCompleted && loading && <Loader />}

      {!isOffline && !loading && (
        <Container>
          <Segment>
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <Item.Extra>
                    <Header as="h1" block floated="left">
                      <Icon name="info circle" />
                      <Header.Content>
                        {`Question No.${questionIndex + 1} of ${data.length}`}
                      </Header.Content>
                    </Header>
                    <Countdown
                      countdownTime={countdownTime}
                      timesUp={timesUp}
                      timeAmount={timeAmount}
                    />
                  </Item.Extra>
                  <br />
                  <Item.Meta>
                    <Message size="huge" floating>
                      <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
                    </Message>
                    <br />
                    <Item.Description>
                      <h3>Please choose one of the following answers:</h3>
                    </Item.Description>
                    <Divider />
                    <Menu vertical fluid size="massive">
                      {options.map((option, i) => {
                        let letter;

                        switch (i) {
                          case 0:
                            letter = 'A.';
                            break;
                          case 1:
                            letter = 'B.';
                            break;
                          case 2:
                            letter = 'C.';
                            break;
                          case 3:
                            letter = 'D.';
                            break;
                          default:
                            letter = i;
                            break;
                        }

                        const decodedOption = he.decode(option);

                        return (
                          <Menu.Item
                            key={decodedOption}
                            name={decodedOption}
                            active={userSlectedAns === decodedOption}
                            onClick={handleItemClick}
                          >
                            <b style={{ marginRight: '8px' }}>{letter}</b>
                            {decodedOption}
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  </Item.Meta>
                  <Divider />
                  <Item.Extra>
                    <Button
                      primary
                      content="Next"
                      onClick={handleNext}
                      floated="right"
                      size="big"
                      icon="right chevron"
                      labelPosition="right"
                      disabled={!userSlectedAns}
                    />
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <br />
        </Container>
      )}

      {isQuizCompleted && loadingResult && (
        <Loader text="Getting your result." />
      )}

      {isQuizCompleted && !loadingResult && (
        <Result
          totalQuestions={data.length}
          correctAnswers={correctAnswers}
          time={time}
          questionsAndAnswers={questionsAndAnswers}
          retakeQuiz={retakeQuiz}
          backToHome={backToHome}
        />
      )}

      {isOffline && <Offline />}
    </Item.Header>
  );
};

export default Quiz;
