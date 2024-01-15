// import { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <div className="site-name">Todo tracker</div>
        <div className="todo-info">
          <div className="total">
            Total: 10
          </div>
          <div className="done">
            Done: 4
          </div>
          <div className="pending">
            Pending: 6
          </div>
        </div>
        <div className="login">
          Login
        </div>
      </nav>
    </>
  );
};

export default App;
