import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import '../../index.css';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);

  let isAppInstalled = false;

  if (window.matchMedia('(display-mode: standalone)').matches || appAccepted) {
    isAppInstalled = true;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setPromptEvent(e);
  });

  const installApp = () => {
    promptEvent.prompt();
    promptEvent.userChoice.then((result) => {
      if (result.outcome === 'accepted') {
        setAppAccepted(true);
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  };

  return (
    <Menu stackable inverted>
      <Menu.Item header>
        {/* Dynamic styling based on darkMode */}
        <h1
          className="app-header"
          style={{
            color: darkMode ? '#e0e0e0' : '#ffffff', // White for light mode, dimmer white for dark mode
            transition: 'color 0.3s ease',
          }}
        >
          QuizApp
        </h1>
      </Menu.Item>
      {promptEvent && !isAppInstalled && (
        <Menu.Item position="right">
          <Button
            color="teal"
            icon="download"
            labelPosition="left"
            content="Install App"
            onClick={installApp}
          />
        </Menu.Item>
      )}
      <Menu.Item position="right">
        <Button
          toggle
          color={darkMode ? 'grey' : 'yellow'}
          icon={darkMode ? 'moon' : 'sun'}
          content={darkMode ? 'Light Mode' : 'Dark Mode'}
          onClick={toggleDarkMode}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
