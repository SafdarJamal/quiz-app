import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import Stats from './Stats';
import QA from './QA';

class Result extends Component {
  state = { activeItem: 'Stats' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const {
      totalQuestions,
      correctAnswers,
      takenTime,
      questionsAndAnswers,
      retakeQuiz,
      backToHome
    } = this.props;

    return (
      <Container>
        <Menu fluid widths={2}>
          <Menu.Item
            name="Stats"
            active={activeItem === 'Stats'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Q / A"
            active={activeItem === 'Q / A'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {activeItem === 'Stats' && (
          <Stats
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            takenTime={takenTime}
            retakeQuiz={retakeQuiz}
            backToHome={backToHome}
          />
        )}

        {activeItem === 'Q / A' && (
          <QA questionsAndAnswers={questionsAndAnswers} />
        )}

        <br />
      </Container>
    );
  }
}

export default Result;
