import {
  SAVE_USER_TRANSACTIONS,
  SAVE_USER_WALLET_INFO,
  SAVE_NFT_META_DATA,
  SAVE_NFT_DATA
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

export const HandleNftMetaData = (userEthNfts, polyNfts) => async (dispatch) => {
  // console.log("User Eth NFts ", userEthNfts, "User Poly Nfts", polyNfts);
  dispatch({type: SAVE_NFT_DATA, payload: userEthNfts})
  let metaDataNfts = [];
  for (let i = 0; i < userEthNfts.result.length; i++) {
    if (userEthNfts.result[i].metadata !== null) {
      metaDataNfts.push(userEthNfts.result[i]);
    }
    // await fetch(userEthNfts.result[i].token_uri, {
    //   method: 'GET',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   }
    // }).then(data => {
    //     data.json().then(json => {
    //       console.log(json)
    //     });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }
  for (let i = 0; i < polyNfts.result.length; i++) {
    if (polyNfts.result[i].metadata !== null) {
      if(polyNfts.result[i].tokenId){

      }
      // metaDataNfts.push(polyNfts.result[i]);
    }
  }
  dispatch({type: SAVE_NFT_META_DATA, payload: metaDataNfts})
};
