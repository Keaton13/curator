import { SAVE_WHALE_TRANSACTION_DATA } from "../actions/types";

const initalState = {
  whaleTransactions: {
    data: null,
  },
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SAVE_WHALE_TRANSACTION_DATA:
      return {
        ...state,
        whaleTransactions: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
