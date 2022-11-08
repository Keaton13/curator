import React, { useEffect } from "react";
import LogInModal from "./logInModal";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { getWhaleTransactions } from "../redux/actions/whaleAlertAction";

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
      <div className="row">
        {(isAuthenticated === true) & (whaleTransactionData !== null) ? (
          <table className="table table-layout">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">Blockchain</th>
                <th scope="col">Amount</th>
                <th scope="col">Amount USD</th>
                <th scope="col">To</th>
                <th scope="col">From</th>
              </tr>
            </thead>
            <tbody>
              {whaleTransactionData.transactions.map((transaction) => {
                return (
                  <tr className="mt-3 mb-3 bg-white">
                    <td className="">
                      <h5 className="font-weight-bold">
                        {transaction.blockchain}
                      </h5>
                    </td>
                    <td className="">
                      {transaction.amount.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                      <span className="text-secondary">
                        {" " + transaction.symbol}
                      </span>
                    </td>
                    <td className="">
                      {"$ " +
                        transaction.amount_usd.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                    </td>
                    <td className="overflow-auto">
                      <h5 className="font-weight-bold">
                        {transaction.to.owner}
                      </h5>
                    </td>
                    <td className="overflow-auto">
                      <h5 className="font-weight-bold">
                        {transaction.from.owner}
                      </h5>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <LogInModal />
        )}
      </div>
    </div>
  );
};

export default WhaleAlert;
