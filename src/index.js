import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// note that create-react-app normally intentionally enables React.StrictMode -- see here https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61897567#61897567
// doing that with Quagga seems to cause the camera to remain on even after the scanner is stopped, so i'm turning that off here.
// I'm not sure if it's a Chrome-on-Desktop problem, or if it's a wider problem with the way this particular scanner component is written.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
