import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  // const [openModal, setOpenmodal] = useState(false);

  const handleIncrease = () => {
    setCount(count+1);
  }
  const handleDecrease = () => {
    setCount(count-1);
  }
  const handleReset = () => {
    setCount(0);
  }
  // const handleModal = () => {
  //   setOpenmodal(!openModal);
  // }

  return (
    <div className="App">
      <header>React testing Demo</header>
      <Counter 
        handleIncrease={handleIncrease} 
        handleDecrease={handleDecrease} 
        handleReset={handleReset} 
        // handleModal={handleModal} 
        count={count} 
      />
    </div>
  );
}

export default App;
