import {
  SAVE_USER_TRANSACTIONS,
  SAVE_USER_WALLET_INFO,
  SAVE_NFT_META_DATA,
  SAVE_NFT_DATA,
  SAVE_USER_WALLET_BALANCE,
} from "./types";

export const HandleTransaction = (Data) => (dispatch) => {
  let totalGas = 0;
  let totalEthSent = 0;

  Data.result.map((transaction) => {
    if (transaction.receipt_gas_used !== undefined) {
      let tempGas = transaction.gas_price * transaction.receipt_gas_used;
      totalEthSent = totalEthSent + Number(transaction.value);
      totalGas += tempGas;
    }
  });

  let walletData = {
    totalGas: totalGas + "",
    totalEthSent: totalEthSent + "",
  };

  // console.log("Gas Amount: ", + totalGas);
  // console.log("total Eth Sent: ", + totalEthSent)

  dispatch({
    type: SAVE_USER_TRANSACTIONS,
    payload: walletData,
  });

  dispatch({
    type: SAVE_USER_WALLET_INFO,
    payload: Data,
  });
};

export const HandleNftMetaData =
  (userEthNfts, polyNfts) => async (dispatch) => {
    // console.log("User Eth NFts ", userEthNfts, "User Poly Nfts", polyNfts);
    dispatch({ type: SAVE_NFT_DATA, payload: userEthNfts });
    let metaDataNfts = [];

    for (let i = 0; i < userEthNfts.result.length; i++) {
      if (userEthNfts.result[i].metadata !== null) {
        metaDataNfts.push(userEthNfts.result[i]);
      }
    }

    for (let i = 0; i < polyNfts.result.length; i++) {
      if (polyNfts.result[i].metadata !== null) {
        if (polyNfts.result[i].tokenId) {
        }
        // console.log(polyNfts.result[i]);
        // metaDataNfts.push(polyNfts.result[i]);
      }
    }
    dispatch({ type: SAVE_NFT_META_DATA, payload: metaDataNfts });
  };

export const saveWalletBalance = (balance) => async (dispatch) => {
  console.log("Saving wallet balance");
  dispatch({ type: SAVE_USER_WALLET_BALANCE, payload: balance });
};
