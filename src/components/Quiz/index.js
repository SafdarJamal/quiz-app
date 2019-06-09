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
import Result from '../Result';
import Countdown from '../Countdown';
import Offline from '../Offline';

import he from 'he';

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
      isOffline: false
    };

    this.takenTime = undefined;

    this.getRandomNumber = this.getRandomNumber.bind(this);
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
    // console.log(API);

    fetch(API)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result.results), 1000))
      .catch(error => setTimeout(() => this.resolveError(error), 1000));
  }

  resolveError(error) {
    if (!navigator.onLine) {
      // console.log('Connection problem');
      this.setState({ isOffline: true });
    } else {
      console.log('API problem ==> ', error);
    }
  }

  getRandomNumber() {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setData(results) {
    // console.log(results);

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
        timer: 5000,
        onClose: () => {
          this.props.backToHome();
        }
      });
    }

    const quizData = results;
    const { questionIndex } = this.state;
    const outPut = this.getRandomNumber();
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
      correctAnswers
    } = this.state;

    let point = 0;
    if (userSlectedAns === quizData[questionIndex].correct_answer) {
      point = 1;
    }

    if (questionIndex === quizData.length - 1) {
      this.setState({
        correctAnswers: correctAnswers + point,
        userSlectedAns: null,
        isLoading: true,
        quizIsCompleted: true,
        questionIndex: 0,
        options: null
      });
      return false;
    }

    const outPut = this.getRandomNumber();

    const options = [...quizData[questionIndex + 1].incorrect_answers];
    options.splice(outPut, 0, quizData[questionIndex + 1].correct_answer);
    this.setState({
      correctAnswers: correctAnswers + point,
      questionIndex: questionIndex + 1,
      userSlectedAns: null,
      options,
      outPut
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
    this.takenTime = {
      timerTime,
      totalTime
    };
  }

  renderResult() {
    setTimeout(() => {
      const { quizData, correctAnswers } = this.state;
      const { backToHome } = this.props;

      const resultRef = (
        <Result
          totalQuestions={quizData.length}
          correctAnswers={correctAnswers}
          retakeQuiz={this.retakeQuiz}
          backToHome={backToHome}
          takenTime={this.takenTime}
        />
      );

      this.setState({ resultRef });
    }, 2000);
  }

  retakeQuiz() {
    // console.log('Retake quiz func');
    const { quizData, questionIndex } = this.state;
    const outPut = this.getRandomNumber();
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
      // outPut,
      userSlectedAns,
      isLoading,
      // correctAnswers,
      quizIsCompleted,
      resultRef,
      startNewQuiz,
      isOffline
    } = this.state;

    // console.log(userSlectedAns);
    // console.log(questionIndex, outPut);
    // console.log('Score ==>', correctAnswers);

    if (quizIsCompleted && !resultRef) {
      this.renderResult();
      // console.log('Routing to result');
    }

    if (startNewQuiz) {
      this.startNewQuiz();
    }

    return (
      <Item.Header>
        {!isOffline && !quizIsCompleted && isLoading && <Loader />}
        {!isOffline && !isLoading && (
          <Container>
            <Segment raised>
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
                        {options.map((item, i) => {
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
                          return (
                            <Menu.Item
                              key={item}
                              name={item}
                              active={userSlectedAns === item}
                              onClick={this.handleItemClick}
                            >
                              <b style={{ marginRight: '8px' }}>{letter}</b>
                              {he.decode(item)}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    </Item.Meta>
                    <Divider />
                    <Item.Extra>
                      {!userSlectedAns && (
                        <Button
                          primary
                          content="Next"
                          floated="right"
                          disabled
                          size="big"
                          icon="right chevron"
                          labelPosition="right"
                        />
                      )}
                      {userSlectedAns && (
                        <Button
                          primary
                          content="Next"
                          onClick={this.handleNext}
                          floated="right"
                          size="big"
                          icon="right chevron"
                          labelPosition="right"
                        />
                      )}
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
