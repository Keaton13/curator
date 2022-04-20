import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HandleTransaction } from "../redux/actions/web3Actions";
import { useNativeTransactions, useMoralis } from "react-moralis";

const Transactions = () => {
  const { getNativeTransations, data, chainId, error, isLoading, isFetching } =
    useNativeTransactions();
  const { Moralis, isAuthenticated } = useMoralis();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('test')
  //   if(data !== null){
  //     HandleTransaction();
  //   }
  //   // Safe to add dispatch to the dependencies array
  // }, [data])

  // const HandleTransaction = () => {
  //   if (data !== null) {
  //     console.log(data);
  //     let totalGas = 0;
  //     const transactions = data.result.map((transaction) => {
  //       if (transaction.receipt_cumulative_gas_used !== undefined) {
  //         let tempGas =
  //           transaction.gas_price * transaction.receipt_cumulative_gas_used;
  //         tempGas = Moralis.Units.FromWei(tempGas);
  //         console.log(tempGas);
  //         totalGas = totalGas + tempGas;
  //       }
  //     });
  //     totalGas = Moralis.Units.FromWei(totalGas);
  //     console.log("Gas Amount: ", totalGas);
  //   }
  // };

  return (
    <div className="container">
      <div className="row mt-4 mb-3">
        <table className="table table-layout">
          <thead>
            <tr>
              <th className="w-50">Transaction</th>
              <th>Value</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.result.map((transaction) => {
                if(isAuthenticated === true) {
                  return (
                    <tr>
                      <td>
                        {transaction.block_hash}
                      </td>
                      <td>
                        {Moralis.Units.FromWei(transaction.value) + " ETH"}
                      </td>
                      <td>
                        {transaction.block_timestamp}
                      </td>
                    </tr>
                  );
                }                
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
