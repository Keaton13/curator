import React from 'react';
import './App.css';
import Header from '../src/components/header'
import Balance from './components/balance';
import Ticker from './components/ticker';

function App() {
  return (
    <div className="App">
      <div className="container background-color-app">
        <Header />
        <Ticker />
        {/* <Balance/> */}
      </div>
    </div>
  );
}

export default App;
