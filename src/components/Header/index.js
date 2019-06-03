import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.promptEvent = null;

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      this.promptEvent = e;
    });
  }

  installApp() {
    console.log('Init Func ===', this.promptEvent);

    this.promptEvent.prompt();
    this.promptEvent.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        console.log('==>', this.promptEvent);
      } else {
        console.log('User dismissed the A2HS prompt');
        console.log('==>', this.promptEvent);
      }
    });
  }

  render() {
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
              onClick={this.installApp}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

// let promptEvent;

// window.addEventListener('beforeinstallprompt', e => {
//   e.preventDefault();
//   promptEvent = e;
// });

export default Header;
