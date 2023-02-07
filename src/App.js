import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [isVisisble, setIsVisible] = useState(false);

  const toggleVisibility = e => setIsVisible(!isVisisble);
  return (
    <div className="App">
      <h1>Workshop React Hooks</h1>
      <button className="visibility-btn" onClick={toggleVisibility}>
        {isVisisble ? 'Hide' : 'Show'} Counter
      </button>
      {isVisisble && <Counter />}
    </div>
  );
}

export default App;
