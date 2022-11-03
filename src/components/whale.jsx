import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { getWhaleTransactions } from "../redux/actions/whaleAlertAction";
import Logo from "../images/images.png";

const WhaleAlert = () => {
  const { Moralis, isAuthenticated } = useMoralis();
  const dispatch = useDispatch();

  const whaleTransactionData = useSelector(
    (state) => state.whaleReducer.whaleTransactions.data
  );

  console.log(whaleTransactionData);

  useEffect(() => {
    if (isAuthenticated === true && whaleTransactionData !== null) {
      console.log(whaleTransactionData);
    } else if (isAuthenticated === true && whaleTransactionData === null) {
      dispatch(getWhaleTransactions());
    }
  }, [whaleTransactionData]);

  return (
    <div className="continer">
      <div className="row mt-4 mb-3">
        {isAuthenticated === true && (
          <table className="table table-layout">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">Blockchain</th>
                <th scope="col">Amount USD</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {(isAuthenticated === true) & (whaleTransactionData !== null) ? (
                whaleTransactionData.transactions.map((transaction) => {
                  return (
                    <tr>
                      <td>{transaction.blockchain}</td>
                      <td>{transaction.amount_usd}</td>
                      <td>{transaction.from.address}</td>
                      <td>{transaction.to.address}</td>
                      <td>{transaction.transaction_type}</td>
                    </tr>
                  );
                })
              ) : (
                <div className="col-3 mt-3 mb-4 mx-auto">
                  <div className="container nftDisplayBackground">
                    <div className="row">
                      <div className="col"></div>
                    </div>
                    <div className="row mt-3 nftInfoDisplayHeight">
                      <div className="col text-center">
                        <div className="row text-center">
                          <h3>Please login to continue</h3>
                        </div>
                        <div className="row mb-5">
                          <div className="col text-center">
                            <h1 className="mt-2 logoFont">Curator</h1>
                            <img
                              src={Logo}
                              alt="Nft"
                              className="w-50 mt-4 rotateImage"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default WhaleAlert;
