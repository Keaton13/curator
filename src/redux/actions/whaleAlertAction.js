import { SAVE_WHALE_TRANSACTION_DATA } from "./types";

export const getWhaleTransactions = () => (dispach) => {
  console.log("Inside whale transaction redux action");
  fetch(
    "https://api.whale-alert.io/v1/transactions?api_key=aEhtUqSlRgn06iXo1AloB5yKYzdSAS1X&min_value=10000&start=1550237797&cursor=2bc7e46-2bc7e46-5c66c0a7"
  )
    .then((res) => {
      const data = res.json();
      return data;
    })
    .then((data) => {
      dispach({
        type: SAVE_WHALE_TRANSACTION_DATA,
        payload: data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
