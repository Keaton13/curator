import React, { useEffect } from 'react'
import { injected } from './wallet/connectors';
import { useWeb3React } from '@web3-react/core';

const Balance = props => {
    const [networkName, setNetworkName] = React.useState('test')
    const [ethBalance, setBalance] = React.useState(null);
    const [metaMaskStatus, setMetaMaskStatus] = React.useState(false);
    const { active, account, library, activate, deactivate } = useWeb3React();

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
            setNetworkName(null)
        } catch (ex) {
            console.log(ex);
        }
    }

    function getData() {
        if (library) {
            library.eth.net.getId().then(data => {
                let networkId = data;
                setNetworkId(networkId);
                console.log(networkId);
            });
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

    function setNetworkId(networkId){
        if(networkId === 1){
            setNetworkName('Mainnet')
        } else if (networkId === 3){
            setNetworkName('Ropsten')
        } else if (networkId === 4){
            setNetworkName('Rinkbey')
        } else if (networkId === 5){
            setNetworkName('Goerli')
        } else {
            setNetworkName('Unknown Network Id')
        }
    }

    return (
            <div className='container'>
                <div className="row text-center mt-3">
                    {active ? <h2>Connected To {networkName}</h2> : <h2>Not Connected to network</h2>}
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <div>
                            <h3>Account Balance</h3>
                            <h4 className="mt-2">{ethBalance ? ethBalance + " ETH": "Can't fetch account balance"}</h4>
                        </div>
                        <div className='mt-3'>
                            {active ? <span>Address: <b className="mt-3">{account}</b></span> : <span></span>}
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-3">
                    {active ? <span></span> : <button onClick={() => { setMetaMaskStatus(false) }} className="btn btn-outline-primary w-25 mx-auto">Connect To MetaMask</button>}
                    {active && <button onClick={disconnect} className="btn btn-outline-danger w-25 mr-2 mx-auto">Disconnect</button>}
                </div>
            </div>
    )
}

export default Balance