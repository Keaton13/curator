import { SAVE_USER_TRANSACTIONS } from "./types";

export const HandleTransaction = (data) => dispach => {
    if (data !== null) {
      console.log(data);
      let totalGas = 0;
      const transactions = data.result.map((transaction) => {
        if (transaction.receipt_cumulative_gas_used !== undefined) {
          let tempGas =
            +transaction.gas_price * +transaction.receipt_cumulative_gas_used;
          totalGas = totalGas + tempGas;
        }
      });
      console.log("Gas Amount: ", totalGas);
      dispach({
          type: SAVE_USER_TRANSACTIONS,
          payload: totalGas
      })
    }
  };