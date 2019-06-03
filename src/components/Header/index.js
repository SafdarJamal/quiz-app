import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { promptEvent: null };

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      if (this.state.promptEvent === null) {
        console.log('Loooging');
        this.setState({ promptEvent: e });
      } else {
        console.log('Booooooo');
      }
    });

    this.installApp = this.installApp.bind(this);
  }

  installApp() {
    const { promptEvent } = this.state;
    console.log('Init Func ===', promptEvent);

    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        // console.log('==>', this.promptEvent);
      } else {
        console.log('User dismissed the A2HS prompt');
        // console.log('==>', this.promptEvent);
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

export default Header;
