import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMoralis, useNativeBalance } from "react-moralis";
import Eth from "../images/eth.png";
import Chip from "../images/chip.png";
import { saveWalletBalance } from "../redux/actions/web3Actions";

const Cards = () => {
  let ethAddress;

  const [status, setStatus] = useState(false);
  const { user, isAuthenticated, Moralis } = useMoralis();
  const dispatch = useDispatch();

  const transactionData = useSelector(
    (state) => state.web3Reducer.transactionData.data
  );

  const {
    getBalances,
    data: balance
  } = useNativeBalance();

  useEffect(() => {
    if(isAuthenticated === false) {
      setStatus(false)
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (balance.balance !== undefined && transactionData !== null) {
      dispatch(saveWalletBalance(balance));
      if (user) {
        saveMoralisData();
      }
    } else {
      setStatus(false);
      getBalances();
    }
  }, [balance.balance, transactionData, user]);

  const saveMoralisData = async () => {
    ethAddress = user.get("ethAddress");

    if (balance.balance !== undefined) {
      setStatus(true);
    } else {
     await getBalances();
    }
  };

  return (
    <div className="row cardLayout mt-3 w-75 mx-auto">
      <div className="col-4">
        <div className="card">
          <div className="row mt-3 ml-3">
            <div className="col-4">
              <img src={Eth} alt="Eth" className="w-25 cardImage" />
              <h5 className="text-white">ETH</h5>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <div className="float-left">
                <img src={Chip} alt="Chip Img" className="w-50" />
              </div>
            </div>
          </div>
          <div className="row h-50 headerLinks">
            <div className="col">
              {status === true ? (
                <h2 className="text-white text-align-left mgl-1">
                  {Moralis.Units.FromWei(balance.balance)}
                </h2>
              ) : (
                <h2 className="text-white text-align-left mgl-1">0.00</h2>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col cardAddressFontSize">
              <p className="text-white text-align-left mb-0" id="cardAddress">
                Wallet Address:
              </p>
              {status === true ? (
                <p className="text-white">{ethAddress}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="row mt-3 ml-3">
            <div className="col-8">
              <img
                src={Eth}
                alt="Eth Symbol"
                className="w-25 cardImage cardSymbolWidth"
              />
              <h5 className="text-white">Total Gas Spent</h5>
            </div>
            <div className="col-4">
              <div className="float-left">
                <img src={Chip} alt="Chip" className="w-50" />
              </div>
            </div>
          </div>
          <div className="row h-50 headerLinks">
            <div className="col">
              {status === true ? (
                <h2 className="text-white text-align-left mgl-1">
                  {transactionData !== null &&
                    Moralis.Units.FromWei(transactionData.totalGas)}
                </h2>
              ) : (
                <h2 className="text-white text-align-left mgl-1">0.00</h2>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col cardAddressFontSize">
              <p className="text-white text-align-left mb-0" id="cardAddress">
                Wallet Address:
              </p>
              {status === true ? (
                <p className="text-white">{ethAddress}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="row mt-3 ml-3">
            <div className="col-8">
              <img
                src={Eth}
                alt="Eth"
                className="w-25 cardImage cardSymbolWidth"
              />
              <h5 className="text-white">Total Transfered</h5>
            </div>
            <div className="col-4">
              <div className="float-left">
                <img src={Chip} alt="Chip" className="w-50" />
              </div>
            </div>
          </div>
          <div className="row h-50 headerLinks">
            <div className="col">
              {status === true ? (
                <h2 className="text-white text-align-left mgl-1">
                  {transactionData !== null &&
                    Moralis.Units.FromWei(transactionData.totalEthSent)}
                </h2>
              ) : (
                <h2 className="text-white text-align-left mgl-1">0.00</h2>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col cardAddressFontSize">
              <p className="text-white text-align-left mb-0" id="cardAddress">
                Wallet Address:
              </p>
              {status === true ? (
                <p className="text-white">{ethAddress}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
