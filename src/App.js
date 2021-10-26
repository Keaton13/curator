import React from 'react';
import './App.css';
import Header from '../src/components/header'
import Balance from './components/balance';

function App() {
  return (
    <div className="App">
      <div className="container background-color-app">
        <Header />
        <Balance/>
      </div>
    </div>
  );
}

export default App;
