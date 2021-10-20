import logo from './logo.svg';
import { injected } from './components/wallet/connectors';
import './App.css';
import { useWeb3React } from '@web3-react/core';

function App() {
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
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <div className="container mt-4">
        <div className="row text-center">
          <button onClick={connect} className="btn btn-outline-primary w-50 mx-auto">Connect To MetaMask</button>
        </div>
        <div className="row mt-3 mb-3">
          {active ? <span>Connected with <b>{account}</b></span> : <span>Not Connected</span>}
        </div>
        <div className="row">
          <button onClick={disconnect} className="btn btn-outline-danger w-50 mx-auto">Disconnect</button>
        </div>
      </div>
    </div>
  );
}

export default App;
