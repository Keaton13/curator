import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMoralis, useERC20Transfers } from "react-moralis";
import Eth from "../images/eth.png";
import Chip from "../images/chip.png";

const Cards = (props) => {
  const transactionData = useSelector((state) => state.web3Reducer.transactionData.data);
  const { user, isAuthenticated, Moralis, account } = useMoralis();

  return (
    <div className="row cardLayout mt-3 w-75 mx-auto">
      <div className="col-4">
        <div className="card">
          <div className="row mt-3 ml-3">
            <div className="col-4">
              <img src={Eth} className="w-25 cardImage" />
              <h5 className="text-white">ETH</h5>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <div className="float-left">
                <img src={Chip} className="w-50" />
              </div>
            </div>
          </div>
          <div className="row h-50 headerLinks">
            <div className="col">
              {isAuthenticated ? (
                <h2 className="text-white text-align-left mgl-1">
                  {props.balance.formatted}
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col cardAddressFontSize">
              <p className="text-white text-align-left mb-0" id="cardAddress">
                Wallet Address:
              </p>
              {isAuthenticated ? (
                <p className="text-white">{user.get("ethAddress")}</p>
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
              <img src={Eth} className="w-25 cardImage cardSymbolWidth" />
              <h5 className="text-white">Total Gas Spent</h5>
            </div>
            <div className="col-4">
              <div className="float-left">
                <img src={Chip} className="w-50" />
              </div>
            </div>
          </div>
          <div className="row h-50 headerLinks">
            <div className="col">
              {isAuthenticated ? (
                <h2 className="text-white text-align-left mgl-1">
                  {transactionData !== null && Moralis.Units.FromWei(transactionData.totalGas)}
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col cardAddressFontSize">
              <p className="text-white text-align-left mb-0" id="cardAddress">
                Wallet Address:
              </p>
              {isAuthenticated ? (
                <p className="text-white">{user.get("ethAddress")}</p>
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
              <img src={Eth} className="w-25 cardImage cardSymbolWidth" />
              <h5 className="text-white">Total Transfered</h5>
            </div>
            <div className="col-4">
              <div className="float-left">
                <img src={Chip} className="w-50" />
              </div>
            </div>
          </div>
          <div className="row h-50 headerLinks">
            <div className="col">
              {isAuthenticated ? (
                <h2 className="text-white text-align-left mgl-1">
                  {transactionData !== null && Moralis.Units.FromWei(transactionData.totalEthSent)}
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col cardAddressFontSize">
              <p className="text-white text-align-left mb-0" id="cardAddress">
                Wallet Address:
              </p>
              {isAuthenticated ? (
                <p className="text-white">{user.get("ethAddress")}</p>
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
