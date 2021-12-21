import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import '@fontsource/lobster-two';
import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
