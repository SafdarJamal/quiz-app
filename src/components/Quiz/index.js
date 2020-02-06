import React, { Component } from 'react';
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

import Loader from '../Loader';
import Countdown from '../Countdown';
import Result from '../Result';
import Offline from '../Offline';

import he from 'he';
import { getRandomNumber } from '../../utils/getRandomNumber';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: null,
      isLoading: true,
      questionIndex: 0,
      correctAnswers: 0,
      userSlectedAns: null,
      quizIsCompleted: false,
      questionsAndAnswers: [],
      isOffline: false
    };

    this.timeTakesToComplete = undefined;

    this.setData = this.setData.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.timesUp = this.timesUp.bind(this);
    this.timeAmount = this.timeAmount.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.retakeQuiz = this.retakeQuiz.bind(this);
    this.startNewQuiz = this.startNewQuiz.bind(this);
    this.resolveError = this.resolveError.bind(this);
  }

  componentDidMount() {
    const { API } = this.props;

    fetch(API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result.results), 1000))
      .catch(error => setTimeout(() => this.resolveError(error), 1000));
  }

  resolveError(error) {
    if (!navigator.onLine) {
      this.setState({ isOffline: true });
      console.log('Connection problem');
    } else {
      this.setState({ isOffline: true });
      console.log('API problem ==> ', error);
    }
  }

  setData(results) {
    if (results.length === 0) {
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
        onClose: () => {
          this.props.backToHome();
        }
      });
    }

    const quizData = results;
    const { questionIndex } = this.state;
    const outPut = getRandomNumber(0, 3);
    const options = [...quizData[questionIndex].incorrect_answers];
    options.splice(outPut, 0, quizData[questionIndex].correct_answer);

    this.setState({ quizData, isLoading: false, options, outPut });
  }

  handleItemClick(e, { name }) {
    this.setState({ userSlectedAns: name });
  }

  handleNext() {
    const {
      userSlectedAns,
      quizData,
      questionIndex,
      correctAnswers,
      questionsAndAnswers
    } = this.state;

    let point = 0;
    if (userSlectedAns === he.decode(quizData[questionIndex].correct_answer)) {
      point = 1;
    }

    questionsAndAnswers.push({
      question: he.decode(quizData[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: he.decode(quizData[questionIndex].correct_answer),
      point
    });

    if (questionIndex === quizData.length - 1) {
      this.setState({
        correctAnswers: correctAnswers + point,
        userSlectedAns: null,
        isLoading: true,
        quizIsCompleted: true,
        questionIndex: 0,
        options: null,
        questionsAndAnswers
      });

      return;
    }

    const outPut = getRandomNumber(0, 3);

    const options = [...quizData[questionIndex + 1].incorrect_answers];
    options.splice(outPut, 0, quizData[questionIndex + 1].correct_answer);

    this.setState({
      correctAnswers: correctAnswers + point,
      questionIndex: questionIndex + 1,
      userSlectedAns: null,
      options,
      outPut,
      questionsAndAnswers
    });
  }

  timesUp() {
    this.setState({
      userSlectedAns: null,
      isLoading: true,
      quizIsCompleted: true,
      questionIndex: 0,
      options: null
    });
  }

  timeAmount(timerTime, totalTime) {
    this.timeTakesToComplete = {
      timerTime,
      totalTime
    };
  }

  renderResult() {
    setTimeout(() => {
      const { quizData, correctAnswers, questionsAndAnswers } = this.state;
      const { backToHome } = this.props;

      const resultRef = (
        <Result
          totalQuestions={quizData.length}
          correctAnswers={correctAnswers}
          timeTakesToComplete={this.timeTakesToComplete}
          questionsAndAnswers={questionsAndAnswers}
          retakeQuiz={this.retakeQuiz}
          backToHome={backToHome}
        />
      );

      this.setState({ resultRef, questionsAndAnswers: [] });
    }, 2000);
  }

  retakeQuiz() {
    const { quizData, questionIndex } = this.state;
    const outPut = getRandomNumber(0, 3);
    const options = [...quizData[questionIndex].incorrect_answers];
    options.splice(outPut, 0, quizData[questionIndex].correct_answer);

    this.setState({
      correctAnswers: 0,
      quizIsCompleted: false,
      startNewQuiz: true,
      options,
      outPut
    });
  }

  startNewQuiz() {
    setTimeout(() => {
      this.setState({ isLoading: false, startNewQuiz: false, resultRef: null });
    }, 1000);
  }

  render() {
    const {
      quizData,
      questionIndex,
      options,
      userSlectedAns,
      isLoading,
      quizIsCompleted,
      resultRef,
      startNewQuiz,
      isOffline
      // outPut,
      // correctAnswers,
    } = this.state;

    // console.log(userSlectedAns);
    // console.log(questionIndex, outPut);
    // console.log('Score ==>', correctAnswers);

    if (quizIsCompleted && !resultRef) {
      this.renderResult();
      // console.log('Redirecting to result');
    }

    if (startNewQuiz) {
      this.startNewQuiz();
    }

    return (
      <Item.Header>
        {!isOffline && !quizIsCompleted && isLoading && <Loader />}

        {!isOffline && !isLoading && (
          <Container>
            <Segment>
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <Item.Extra>
                      <Header as="h1" block floated="left">
                        <Icon name="info circle" />
                        <Header.Content>
                          {`Question No.${questionIndex + 1} of ${
                            quizData.length
                          }`}
                        </Header.Content>
                      </Header>
                      <Countdown
                        countdownTime={this.props.countdownTime}
                        timesUp={this.timesUp}
                        timeAmount={this.timeAmount}
                      />
                    </Item.Extra>
                    <br />
                    <Item.Meta>
                      <Message size="huge" floating>
                        <b>{`Q. ${he.decode(
                          quizData[questionIndex].question
                        )}`}</b>
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
                              onClick={this.handleItemClick}
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
                        onClick={this.handleNext}
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

        {quizIsCompleted && !resultRef && (
          <Loader text="Getting your result." />
        )}

        {quizIsCompleted && resultRef}

        {isOffline && <Offline />}
      </Item.Header>
    );
  }
}

export default Quiz;
