import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

const ShareButton = () => {
  const doShare = () => {
    navigator
      .share({
        title: document.title,
        text: 'Check out the QuizApp — it rocks!',
        url: 'https://safdarjamal.github.io/quiz-app'
      })
      .then(() => {
        console.log('Successfully shared');
      })
      .catch(error => console.log(error));
  };

  return (
    <Fragment>
      {navigator.share ? (
        <Button
          title="Share"
          floated="right"
          size="big"
          circular
          icon="share alternate"
          onClick={doShare}
        />
      ) : null}
    </Fragment>
  );
};

export default ShareButton;
