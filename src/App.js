import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="app-container">
      <div className="counter-box">
        <h1 className="counter-title">Counter App</h1>
        <p className={`count-display ${count === 0 ? 'zero' : ''}`} data-testid="count-value">
          {count}
        </p>
        <div className="button-group">
          <button className="button increment" onClick={increment}>
            Increment
          </button>
          <button 
            className={`button decrement ${count === 0 ? 'disabled' : ''}`} 
            onClick={decrement}
            disabled={count === 0}
          >
            Decrement
          </button>
        </div>
        {count === 0 && <p className="error-message">Cannot decrement below 0</p>}
      </div>
    </div>
  );
}

export default App;
