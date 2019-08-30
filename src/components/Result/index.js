import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import Stats from './Stats';
import QA from './QA';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Stats'
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e, { name }) {
    this.setState({ activeTab: name });
  }

  render() {
    const { activeTab } = this.state;
    const {
      totalQuestions,
      correctAnswers,
      timeTakesToComplete,
      questionsAndAnswers,
      retakeQuiz,
      backToHome
    } = this.props;

    return (
      <Container>
        <Menu fluid widths={2}>
          <Menu.Item
            name="Stats"
            active={activeTab === 'Stats'}
            onClick={this.handleTabClick}
          />
          <Menu.Item
            name="Q / A"
            active={activeTab === 'Q / A'}
            onClick={this.handleTabClick}
          />
        </Menu>

        {activeTab === 'Stats' && (
          <Stats
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            timeTakesToComplete={timeTakesToComplete}
            retakeQuiz={retakeQuiz}
            backToHome={backToHome}
          />
        )}
        {activeTab === 'Q / A' && (
          <QA questionsAndAnswers={questionsAndAnswers} />
        )}
        <br />
      </Container>
    );
  }
}

export default Result;
