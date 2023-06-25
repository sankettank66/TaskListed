import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import DashboardUi from './DashboardUi';
// Add only if you want to render the component Dashboard
// like don't add both components in files, it will change CSS for the component
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App /> 
  {/*<DashboardUi />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
