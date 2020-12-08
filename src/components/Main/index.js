import React, { useState, useEffect } from 'react';
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
  const [numOfQ, setNumOfQ] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [type, setType] = useState(null);
  const [time, setTime] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  let allFieldsSelected = false;
  if (category && numOfQ && difficulty && type && time) {
    allFieldsSelected = true;
  }

  useEffect(() => {
    if (!allFieldsSelected) return;
    if (!processing) return;

    const API = `https://opentdb.com/api.php?amount=${numOfQ}&category=${category}&difficulty=${difficulty}&type=${type}`;

    fetch(API)
      .then(respone => respone.json())
      .then(data => setTimeout(() => handleData(data.results), 1000))
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
            console.log('Connection problem => ', error.message);
          } else {
            setError(error);
            console.log('API problem => ', error.message);
          }
        }, 1000)
      );
  }, [category, numOfQ, difficulty, type, processing]);

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
        timer: 10000
      });
    }

    data.forEach(element => {
      element.options = [...element.incorrect_answers];
      element.options.splice(getRandomNumber(0, 3), 0, element.correct_answer);
    });

    setProcessing(false);
    startQuiz(data, time);
  };

  if (error) return `An error has occurred: ${error.message}`;
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
                  onChange={(e, { value }) => setCategory(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  onChange={(e, { value }) => setNumOfQ(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  options={DIFFICULTY}
                  onChange={(e, { value }) => setDifficulty(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  onChange={(e, { value }) => setType(value)}
                />
                <br />
                <Dropdown
                  fluid
                  selection
                  name="time"
                  placeholder="Select Countdown Time (In Minutes)"
                  options={COUNTDOWN_TIME}
                  onChange={(e, { value }) => setTime(value)}
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

export default Main;
