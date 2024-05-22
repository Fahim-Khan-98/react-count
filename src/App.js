import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){

  const [count, setCount] = useState(0)
  const handleCount = () => {
    const newCount = count+1;
    setCount(newCount)
  }

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleCount}>Increase</button>
    </div>
  )
}

export default App;
