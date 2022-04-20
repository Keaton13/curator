import { SAVE_USER_TRANSACTIONS, SAVE_USER_WALLET_INFO } from "./types";

export const HandleTransaction = (Data) => dispach => {
      let totalGas = 0;
      // let totalEth = 0;
      let totalEthSent = 0;
      Data.result.map((transaction) => {
        if (transaction.receipt_gas_used !== undefined) {
          let gasPrice = transaction.gas_price;
          let gasUsed = transaction.receipt_gas_used;
          let amount = Number(transaction.value)
          let tempGas = gasPrice * gasUsed;
          totalEthSent = totalEthSent + amount;
          totalGas = totalGas + tempGas;
        }
      });
      let walletData = {
        totalGas: totalGas + "",
        totalEthSent: totalEthSent + ""
      }
      console.log("Gas Amount: ", + totalGas);
      console.log("total Eth Sent: ", + totalEthSent)
      dispach({
          type: SAVE_USER_TRANSACTIONS,
          payload: walletData
      })
      dispach({
        type: SAVE_USER_WALLET_INFO,
        payload: Data
      })
  }