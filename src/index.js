import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ThemeProvider } from './components/ThemeProvider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Set initial theme attribute immediately to avoid flicker on first render
try {
  const stored = localStorage.getItem('quizapp-theme');
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
} catch (err) {
  // ignore errors when SSR or if localStorage is not available
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
