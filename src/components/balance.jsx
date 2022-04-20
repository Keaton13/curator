import React, { useEffect } from "react";
import Cards from "./cards";
import Transactions from "./transactions";
import { useMoralis, useNativeBalance } from "react-moralis";

const Balance = (props) => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const {
    getBalances,
    data: balance,
    nativeToken,
    error,
    isLoading,
  } = useNativeBalance();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .then(() => {
          getBalances();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  // const [networkName, setNetworkName] = React.useState("test");
  // const [ethBalance, setBalance] = React.useState(null);
  // const [metaMaskStatus, setMetaMaskStatus] = React.useState(false);

  return (
    <div className="container min-width100">
      <div className="row mt-3 headerLinks">
        <div className="col-2 h-100"></div>
        <div className="col-6 h-100">
          {!isAuthenticated ? (
            <button
              className="btn btn-outline-primary float-left"
              onClick={login}
            >
              LogIn
            </button>
          ) : (
            <div className="row align-items-center">
              <div className="col-3">
                <h2 className="text-align-right">Address:</h2>
              </div>
              <div className="col-7">
                <h5 className="mb-0">{user.get("ethAddress")}</h5>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-outline-primary float-left"
                  onClick={logOut}
                >
                  LogOut
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-2 h-100"></div>
        <div className="col-2 h-100"></div>
      </div>
      <Cards balance={balance} />
      <Transactions />
    </div>
  );
};

export default Balance;
