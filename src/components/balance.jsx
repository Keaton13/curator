import React, { useEffect } from "react";
import Cards from './cards';
import { injected } from "./wallet/connectors";
import { useWeb3React } from "@web3-react/core";

const Balance = (props) => {
  const [networkName, setNetworkName] = React.useState("test");
  const [ethBalance, setBalance] = React.useState(null);
  const [metaMaskStatus, setMetaMaskStatus] = React.useState(false);
  const { active, account, library, activate, deactivate } = useWeb3React();

  useEffect(() => {
    if (metaMaskStatus === false) {
      try {
        activate(injected);
      } catch (ex) {
        console.log(ex);
      }
      getData();
    }
  }, [library, metaMaskStatus]);

  async function disconnect() {
    setMetaMaskStatus(true);
    try {
      setBalance(null);
      deactivate();
      setNetworkName(null);
    } catch (ex) {
      console.log(ex);
    }
  }

  function getData() {
    if (library) {
      library.eth.net.getId().then((data) => {
        let networkId = data;
        setNetworkId(networkId);
        console.log(networkId);
      });
      library.eth
        .getBalance(account)
        .then((result) => {
          console.log(result);
          return result;
        })
        .then((data) => {
          let eth = library.utils.fromWei(data, "ether");
          eth = Number(eth).toFixed(8);
          setBalance(eth);
          console.log(eth);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function setNetworkId(networkId) {
    if (networkId === 1) {
      setNetworkName("Mainnet");
    } else if (networkId === 3) {
      setNetworkName("Ropsten");
    } else if (networkId === 4) {
      setNetworkName("Rinkbey");
    } else if (networkId === 5) {
      setNetworkName("Goerli");
    } else {
      setNetworkName("Unknown Network Id");
    }
  }

  return (
    <div className="container min-width100">
      <div className="row mt-3 headerLinks">
        <div className="col-2 h-100">
          <h2 className="ml-4 mt-2">MetaMask</h2>
        </div>
        <div className="col-6 h-100">
        <button className="btn btn-outline-primary float-left">
            Not Connected
          </button>
          {/* <div>
            <h5 className="float-left">Address: </h5>
          </div>
          <div className="ml-2">
            <h5 className="float-left">2342b34k5jb3k4j6h3kj4h5k3j4h5kj34</h5>
          </div> */}
        </div>
        <div className="col-2 h-100">
        </div>
        <div className="col-2 h-100"></div>
      </div>
      <Cards />
    </div>
  );

  // return (
  //         <div className='container'>
  //             <div className="row text-center mt-3">
  //                 {active ? <h2>Connected To {networkName}</h2> : <h2>Not Connected to network</h2>}
  //             </div>
  //             <div className='row mt-3'>
  //                 <div className='col'>
  //                     <div>
  //                         <h3>Account Balance</h3>
  //                         <h4 className="mt-2">{ethBalance ? ethBalance + " ETH": "Can't fetch account balance"}</h4>
  //                     </div>
  //                     <div className='mt-3'>
  //                         {active ? <span>Address: <b className="mt-3">{account}</b></span> : <span></span>}
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className="row text-center mt-3">
  //                 {active ? <span></span> : <button onClick={() => { setMetaMaskStatus(false) }} className="btn btn-outline-primary w-25 mx-auto">Connect To MetaMask</button>}
  //                 {active && <button onClick={disconnect} className="btn btn-outline-danger w-25 mr-2 mx-auto">Disconnect</button>}
  //             </div>
  //         </div>
  // )
};

export default Balance;
