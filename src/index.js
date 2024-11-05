import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
=======
// import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> c70f7fe (Bug fixing)
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  // <Router basename="/projects/calculator/">
<<<<<<< HEAD
    <App />
=======
    <App basename="/projects/calculator/base/"/>
>>>>>>> c70f7fe (Bug fixing)
  // </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
