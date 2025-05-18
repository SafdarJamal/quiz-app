import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu,
  Input,
  Header,
} from 'semantic-ui-react';
import he from 'he';

import Countdown from '../Countdown';
import { getLetter } from '../../utils';

const Quiz = ({ data, countdownTime, questionMode, judgingMode, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionIndex]);

  const handleMultipleChoiceAnswer = (e, { name }) => {
    setUserAnswer(name);
  };

  const handleFillInBlankAnswer = (e, { value }) => {
    setUserAnswer(value);
  };

  const isAnswerCorrect = (userAnswer, correctAnswer) => {
    if (!userAnswer) return false;
    
    if (questionMode === 'multipleChoice' || 
        (questionMode === 'mixed' && data[questionIndex].type === 'multiple')) {
      return userAnswer === he.decode(correctAnswer);
    }
    
    // 填空题判断逻辑
    const decodedCorrectAnswer = he.decode(correctAnswer);
    if (judgingMode === 'relaxed') {
      return userAnswer.trim().toLowerCase() === decodedCorrectAnswer.trim().toLowerCase();
    } else {
      return userAnswer.trim() === decodedCorrectAnswer.trim();
    }
  };

  const handleNext = () => {
    let point = 0;
    if (isAnswerCorrect(userAnswer, data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userAnswer,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point,
    });

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        timeTaken,
        questionsAndAnswers: qna,
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserAnswer(null);
    setQuestionsAndAnswers(qna);
  };

  const timeOver = timeTaken => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
  };

  const renderAnswerOptions = () => {
    const currentQuestion = data[questionIndex];
    const shouldShowMultipleChoice = 
      questionMode === 'multipleChoice' || 
      (questionMode === 'mixed' && currentQuestion.type === 'multiple');

    if (shouldShowMultipleChoice) {
      return (
        <Menu vertical fluid size="massive">
          {currentQuestion.options.map((option, i) => {
            const letter = getLetter(i);
            const decodedOption = he.decode(option);

            return (
              <Menu.Item
                key={decodedOption}
                name={decodedOption}
                active={userAnswer === decodedOption}
                onClick={handleMultipleChoiceAnswer}
              >
                <b style={{ marginRight: '8px' }}>{letter}</b>
                {decodedOption}
              </Menu.Item>
            );
          })}
        </Menu>
      );
    } else {
      return (
        <div>
          <Input
            fluid
            size="large"
            placeholder="Enter your answer"
            value={userAnswer || ''}
            onChange={handleFillInBlankAnswer}
          />
          {judgingMode === 'relaxed' && (
            <Message info size="tiny">
              <Icon name="info circle" />
              Relaxed Mode: Case insensitive, ignores extra spaces
            </Message>
          )}
        </div>
      );
    }
  };

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Content>
              <Item.Extra>
                <Header as="h1" block floated="left">
                  <Icon name="info circle" />
                  <Header.Content>
                    {`Question ${questionIndex + 1} of ${data.length}`}
                  </Header.Content>
                </Header>
                <Countdown
                  countdownTime={countdownTime}
                  timeOver={timeOver}
                  setTimeTaken={setTimeTaken}
                />
              </Item.Extra>
              <br />
              <Item.Meta>
                <Message size="huge" floating>
                  <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
                </Message>
                <br />
                <Item.Description>
                  <h3>
                    {questionMode === 'multipleChoice' || 
                     (questionMode === 'mixed' && data[questionIndex].type === 'multiple')
                      ? 'Please choose one of the following answers:'
                      : 'Please enter your answer below:'}
                  </h3>
                </Item.Description>
                <Divider />
                {renderAnswerOptions()}
              </Item.Meta>
              <Divider />
              <Button
                primary
                content="Next"
                onClick={handleNext}
                floated="right"
                size="big"
                icon="right chevron"
                labelPosition="right"
                disabled={!userAnswer}
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Container>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired,
  questionMode: PropTypes.string.isRequired,
  judgingMode: PropTypes.string.isRequired,
  endQuiz: PropTypes.func.isRequired,
};

export default Quiz;
