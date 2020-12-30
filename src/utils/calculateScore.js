const calculateScore = (totalQuestions, correctAnswers) => {
  return Number(((correctAnswers * 100) / totalQuestions).toFixed(2));
};

export default calculateScore;
