import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var projectText = React.createElement(
  "h1",
  { id: "randomProjectText"},
  "Losowy projekt"
);

var appRoot = document.getElementById('root');

ReactDOM.render(projectText, appRoot);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
