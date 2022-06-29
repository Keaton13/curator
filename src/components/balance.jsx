import React from "react";
import Cards from "./cards";
import Transactions from "./transactions";
// import { saveWalletBalance } from "../redux/actions/web3Actions";
import { useMoralis } from "react-moralis";

const Balance = () => {
  const { isAuthenticated, user } = useMoralis();

  return (
    <div className="container min-width100 min-Height100">
      <div className="row mt-3 headerLinks">
        <div className="col-2 h-100"></div>
        <div className="col-6 h-100">
          {!isAuthenticated ? (
            <p></p>
          ) : (
            <div className="row align-items-center">
              <div className="col-3">
                <h2 className="text-align-right">Address:</h2>
              </div>
              <div className="col-7">
                <h5 className="mb-0">{user.get("ethAddress")}</h5>
              </div>
              <div className="col-2"></div>
            </div>
          )}
        </div>
        <div className="col-2 h-100"></div>
        <div className="col-2 h-100"></div>
      </div>
      <Cards />
      <Transactions />
    </div>
  );
};

export default Balance;
