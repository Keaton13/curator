import React, { useEffect } from 'react'
import { injected } from './wallet/connectors';
import { useWeb3React } from '@web3-react/core';

const Balance = props => {
    const [ethBalance, setBalance] = React.useState(null);
    const [metaMaskStatus, setMetaMaskStatus] = React.useState(false);
    const { active, account, library, connector, activate, deactivate } = useWeb3React();

    useEffect(() => {
        if (metaMaskStatus === false) {
            try {
                activate(injected)
            } catch (ex) {
                console.log(ex)
            }
            getData();
        } 
    }, [library, metaMaskStatus])

    async function disconnect() {
        setMetaMaskStatus(true);
            try {
                setBalance(null)
                deactivate();
            } catch (ex) {
                console.log(ex);
            }
    }

    function getData() {
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
        <div>
            <div className="row text-center mt-3">
                <h2>Account Balance</h2>
                <h4 className="mt-2">{ethBalance ? ethBalance : <h5>Can't fetch account balance</h5>}</h4>
            </div>
            <div className="row mt-3 mb-3">
                {active ? <span>Connected To <b>{account}</b></span> : <span>Not Connected</span>}
            </div>
            <div className="row text-center mt-3">
                {active ? <span></span> : <button onClick={() => {setMetaMaskStatus(false)}} className="btn btn-outline-primary w-50 mx-auto">Connect To MetaMask</button>}
            </div>
            <div className="row mt-3">
                {/* {active && <button onClick={getData()} className="btn btn-outline-primary w-50 ml-2 mx-auto">Get Data!</button>} */}
            </div>
            <div className="row mt-3">
                {active && <button onClick={disconnect} className="btn btn-outline-danger w-50 mr-2 mx-auto">Disconnect</button>}
            </div>
        </div>
    )
}

export default Balance