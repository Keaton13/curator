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
                <th className="w-50">Transaction</th>
                <th>Value</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {(isAuthenticated === true) & (whaleTransactionData !== null) ? (
                data.result.map((transaction) => {
                  return (
                    // <tr id={transaction[transaction]}>
                    //   <td>{transaction.block_hash}</td>
                    //   <td>
                    //     {Moralis.Units.FromWei(transaction.value) + " ETH"}
                    //   </td>
                    //   <td>{transaction.block_timestamp}</td>
                    // </tr>
                    console.log(transaction)
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