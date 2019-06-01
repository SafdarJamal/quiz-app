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

import Loader from '../Loader';
import Result from '../Result';
import Countdown from '../Countdown';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: props.quizData,
      isLoading: true,
      questionIndex: 0,
      correctAnswers: 0,
      userSlectedAns: null,
      quizIsCompleted: false
    };

    this.takenTime = undefined;

    this.handleItemClick = this.handleItemClick.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.timesUp = this.timesUp.bind(this);
    this.timeAmount = this.timeAmount.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.retakeQuiz = this.retakeQuiz.bind(this);
    this.startNewQuiz = this.startNewQuiz.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ userSlectedAns: name });
  }

  componentDidMount() {
    const { quizData, questionIndex } = this.state;
    const outPut = this.getRandomNumber();
    const options = [...quizData[questionIndex].incorrect_answers];
    options.splice(outPut, 0, quizData[questionIndex].correct_answer);

    setTimeout(() => {
      this.setState({ isLoading: false, options, outPut });
    }, 2000);
  }

  getRandomNumber() {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

    if (questionIndex === 9) {
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
      const { correctAnswers } = this.state;
      const { backToHome } = this.props;

      const resultRef = (
        <Result
          correctAnswers={correctAnswers}
          retakeQuiz={this.retakeQuiz}
          backToHome={backToHome}
          takenTime={this.takenTime}
        />
      );

      this.setState({ resultRef });
    }, 3000);
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
    }, 2000);
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
      startNewQuiz
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
        {!quizIsCompleted && isLoading && <Loader />}
        {!isLoading && (
          <Container>
            <Segment raised>
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <Item.Extra>
                      <Header as="h1" block floated="left">
                        <Icon name="info circle" />
                        <Header.Content>
                          Question No.{questionIndex + 1} of 10
                        </Header.Content>
                      </Header>
                      <Countdown
                        timesUp={this.timesUp}
                        timeAmount={this.timeAmount}
                      />
                    </Item.Extra>
                    <br />
                    <Item.Meta>
                      <Message size="huge" floating>
                        <b>{`Q. ${quizData[questionIndex].question}`}</b>
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
                              {item}
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
      </Item.Header>
    );
  }
}

export default Quiz;
