import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';

import Stats from './Stats';
import QA from './QA';

const Result = ({
  totalQuestions,
  correctAnswers,
  takenTime,
  questionsAndAnswers,
  retakeQuiz,
  backToHome
}) => {
  const [activeTab, setActiveTab] = useState('Stats');

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Container>
      <Menu fluid widths={2}>
        <Menu.Item
          name="Stats"
          active={activeTab === 'Stats'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name="Q / A"
          active={activeTab === 'Q / A'}
          onClick={handleTabClick}
        />
      </Menu>
      {activeTab === 'Stats' && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          takenTime={takenTime}
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
};

Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  takenTime: PropTypes.number.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  retakeQuiz: PropTypes.func.isRequired,
  backToHome: PropTypes.func.isRequired
};

export default Result;
