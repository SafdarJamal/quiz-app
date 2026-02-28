import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Header = () => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  let isAppInstalled = false;

  if (window.matchMedia('(display-mode: standalone)').matches || appAccepted) {
    isAppInstalled = true;
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    setPromptEvent(e);
  });

  const installApp = () => {
    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        setAppAccepted(true);
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  };

  //theme setUp
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  return (
    <Menu stackable inverted>
      <Menu.Item header>
        <h1>QuizApp</h1>
      </Menu.Item>

      {/* We use a right-aligned menu to hold the buttons */}
      <Menu.Menu position="right">
        {/* Our new Dark Mode Button */}
        <Menu.Item>
          <Button
            icon={isDarkMode ? 'sun' : 'moon'}
            circular
            color={isDarkMode ? 'yellow' : 'black'}
            onClick={toggleDarkMode}
            title="Toggle Dark Mode"
          />
        </Menu.Item>

        {/* The existing Install App button */}
        {promptEvent && !isAppInstalled && (
          <Menu.Item>
            <Button
              color="teal"
              icon="download"
              labelPosition="left"
              content="Install App"
              onClick={installApp}
            />
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );

};

export default Header;
