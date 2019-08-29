import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import Result from './Result';
import QA from './QA';

export default class extends Component {
  state = { activeItem: 'Result' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const {
      totalQuestions,
      correctAnswers,
      takenTime,
      questionAnswers,
      retakeQuiz,
      backToHome
    } = this.props;

    return (
      <Container>
        <Menu fluid widths={2}>
          <Menu.Item
            name="Result"
            active={activeItem === 'Result'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Q-A"
            active={activeItem === 'Q-A'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {activeItem === 'Result' ? (
          <Result
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            takenTime={takenTime}
            questionAnswers={questionAnswers}
            retakeQuiz={retakeQuiz}
            backToHome={backToHome}
          />
        ) : (
          <QA QA={questionAnswers} />
        )}
        <br />
      </Container>
    );
  }
}
