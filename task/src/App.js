import './App.css';
import LoginForm from './components/LoginForm';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <div className='container flex'>
        <div className="flex left-side">
          <p className='board'>Board.</p>
        </div>
        <LoginForm/>
      </div>
    </React.Fragment>

  );
}

export default App;
