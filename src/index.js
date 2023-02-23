import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reducer,{initialState} from './reducer';
import { StateProvider } from './StateProvider';
=======
import reportWebVitals from './reportWebVitals';
>>>>>>> 0583c2e45a50ab54210ca3f86b1edf885efd65c5

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
=======
    <App />
>>>>>>> 0583c2e45a50ab54210ca3f86b1edf885efd65c5
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD

=======
reportWebVitals();
>>>>>>> 0583c2e45a50ab54210ca3f86b1edf885efd65c5
