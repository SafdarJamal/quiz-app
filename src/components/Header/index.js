import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default () => {
  return (
    <Menu stackable inverted size="massive">
      <Menu.Item actives>
        <h1
          style={{
            color: '#2185D0',
            cursor: 'pointer'
          }}
        >
          The QuizApp
        </h1>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Button
            color="teal"
            content="Install App"
            size="big"
            icon="app store"
            labelPosition="left"
            onClick={installApp}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

let promptEvent;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  promptEvent = e;
});

function installApp() {
  promptEvent.prompt();
  promptEvent.userChoice.then(result => {
    if (result.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
      console.log('==>', promptEvent.outcome);
    }
  });
}
