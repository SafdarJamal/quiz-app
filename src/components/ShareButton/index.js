import React from 'react';
import { Button } from 'semantic-ui-react';

const ShareButton = () => {
  const doShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: 'Check out the QuizApp — it rocks!',
          url: 'https://safdarjamal.github.io/quiz-app'
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => console.log(error));
    } else {
      console.log('Sharing Not available');
    }
  };

  return (
    <Button
      title="Share"
      floated="right"
      size="big"
      circular
      icon="share alternate"
      onClick={doShare}
    />
  );
};

export default ShareButton;
