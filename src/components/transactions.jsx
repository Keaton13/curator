import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HandleTransaction } from "../redux/actions/web3Actions";
import { useNativeTransactions, useMoralis } from "react-moralis";

const Transactions = () => {
  const { getNativeTransations, data} =
    useNativeTransactions();
  const { Moralis, isAuthenticated } = useMoralis();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== null) {
      dispatch(HandleTransaction(data));
    } else if(isAuthenticated === true && data === null){
      getNativeTransations();
    }
  }, [data]);

  return (
    <div className="container">
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
              {data !== null &&
                data.result.map((transaction) => {
                    return (
                      <tr id={transaction[transaction]}>
                        <td>{transaction.block_hash}</td>
                        <td>
                          {Moralis.Units.FromWei(transaction.value) + " ETH"}
                        </td>
                        <td>{transaction.block_timestamp}</td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Transactions;
