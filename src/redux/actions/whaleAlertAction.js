import { SAVE_WHALE_TRANSACTION_DATA } from "./types";

export const getWhaleTransactions = () => (dispach) => {
  console.log("Inside whale transaction redux action");
  fetch("https://curatorv2.herokuapp.com/api/WhaleAlert")
    .then((res) => {
      const data = res.json();
      console.log("Whale Alert Data", data);
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
