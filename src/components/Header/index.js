import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useTheme } from '../ThemeProvider';

const Header = () => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);

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

  const { theme, toggleTheme } = useTheme();

  return (
    <Menu stackable inverted={theme === 'dark'}>
      <Menu.Item header>
        <h1>QuizApp</h1>
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
          basic={theme !== 'dark'}
          color={theme === 'dark' ? 'grey' : 'yellow'}
          icon={theme === 'dark' ? 'sun' : 'moon'}
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
