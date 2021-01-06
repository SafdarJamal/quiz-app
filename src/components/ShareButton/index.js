import React, { Fragment } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ShareButton = () => {
  const handleShare = () => {
    navigator
      .share({
        title: document.title,
        text: 'Check out this quiz app — it rocks!',
        url: 'https://safdarjamal.github.io/quiz-app/'
      })
      .then(() => console.log('Successfully shared'))
      .catch(error => console.log(error.message));
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
          onClick={handleShare}
        />
      ) : (
        <span>
          <a
            href="https://www.facebook.com/sharer.php?u=https%3A//safdarjamal.github.io/quiz-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="facebook" size="big" floated="right">
              <Icon name="facebook" />
              Facebook
            </Button>
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A//safdarjamal.github.io/quiz-app/&text=Check%20out%20this%20quiz%20app%20—%20it%20rocks!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="twitter" size="big" floated="right">
              <Icon name="twitter" />
              Twitter
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsafdarjamal.github.io%2Fquiz-app%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="linkedin" size="big" floated="right">
              <Icon name="linkedin" />
              LinkedIn
            </Button>
          </a>
        </span>
      )}
    </Fragment>
  );
};

export default ShareButton;
