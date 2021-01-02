import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button
} from 'semantic-ui-react';
import Swal from 'sweetalert2';

import codeImg from '../../images/code.png';
import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME
} from '../../constants';
import { getRandomNumber } from '../../utils';

import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState(null);
  const [numOfQuestions, setNumOfQuestions] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionsType, setQuestionsType] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    countdownTime
  ) {
    allFieldsSelected = true;
  }

  useEffect(() => {
    if (!allFieldsSelected) return;
    if (!processing) return;

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    fetch(API)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            const message =
              "The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)" +
              '<br /><br />Please change the <strong>No. of Questions</strong>, <strong>Difficulty Level</strong>, ' +
              'or <strong>Type of Questions</strong>.';

            setProcessing(false);
            setError({ message });

            return;
          }

          results.forEach(element => {
            element.options = [...element.incorrect_answers];
            element.options.splice(
              getRandomNumber(0, 3),
              0,
              element.correct_answer
            );
          });

          setProcessing(false);
          startQuiz(results, countdownTime);
        }, 1000)
      )
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
            console.log('Connection problem => ', error.message);
          } else {
            setProcessing(false);
            setError(error);
            console.log('API problem => ', error.message);
          }
        }, 1000)
      );

    // eslint-disable-next-line
  }, [
    category,
    countdownTime,
    difficulty,
    numOfQuestions,
    processing,
    questionsType
  ]);

  if (error)
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      html: error.message
    });

  if (offline) return <Offline />;

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={codeImg} />
            <Item.Content>
              <Item.Header>
                <h1>Open Trivia Questions</h1>
              </Item.Header>
              <br />
              <Divider />
              <Item.Meta>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="time"
                  placeholder="Select Countdown Time (In Minutes)"
                  options={COUNTDOWN_TIME}
                  value={countdownTime}
                  onChange={(e, { value }) => setCountdownTime(value)}
                />
              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Start Quiz'}
                  onClick={() => setProcessing(true)}
                  disabled={!allFieldsSelected}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired
};

export default Main;
