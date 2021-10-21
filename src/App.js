import React from 'react';
import logo from './logo.svg';
import { injected } from './components/wallet/connectors';
import './App.css';
import { useWeb3React } from '@web3-react/core';
import Header from '../src/components/header'

function App() {
  const [ethBalance, setBalance] = React.useState(null);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate();
      setBalance(null)
    } catch (ex) {
      console.log(ex);
    }
  }

  async function getData() {
    if (library) {
      library.eth.getBalance(account).then(result => {
        console.log(result)
        return result
      }).then(data => {
        let eth = library.utils.fromWei(data, "ether")
        eth = (Number(eth)).toFixed(8);
        setBalance(eth);
        console.log(eth)
      }).catch(err => {
        console.error(err)
      })
    }
  }

  return (
    <div className="App">
      <div className="container background-color-app">
        <Header />
        <div className="row text-center mt-3">
          <h2>Account Balance</h2>
          <h4 className="mt-2">{ethBalance ? ethBalance : <h5>Can't fetch account balance</h5>}</h4>
        </div>
        <div className="row mt-3 mb-3">
          {active ? <span>Connected To <b>{account}</b></span> : <span>Not Connected</span>}
        </div>
        <div className="row text-center mt-3">
          {active ? <span></span> : <button onClick={connect} className="btn btn-outline-primary w-50 mx-auto">Connect To MetaMask</button>}
        </div>
        <div className="row mt-3">
          {active && <button onClick={getData} className="btn btn-outline-primary w-50 ml-2 mx-auto">Get Data!</button>}
        </div>
        <div className="row mt-3">
          <button onClick={disconnect} className="btn btn-outline-danger w-50 mr-2 mx-auto">Disconnect</button>
        </div>
      </div>
    </div>
  );
}

export default App;
