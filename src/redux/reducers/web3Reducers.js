import {
  SAVE_USER_TRANSACTIONS,
  SAVE_USER_WALLET_INFO,
  SAVE_NFT_META_DATA,
  SAVE_NFT_DATA,
  SAVE_USER_WALLET_BALANCE,
} from "../actions/types";

const initalState = {
  transactions: {
    data: null,
  },
  transactionData: {
    data: null,
  },
  nftData: {
    data: null,
  },
  nftMetaData: {
    data: null,
  },
  walletData: {
      data: null
  }
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SAVE_USER_TRANSACTIONS:
      return {
        ...state,
        transactionData: {
          data: action.payload,
        },
      };
    case SAVE_USER_WALLET_INFO:
      return {
        ...state,
        transactions: {
          data: action.payload,
        },
      };
    case SAVE_NFT_META_DATA:
      return {
        ...state,
        nftMetaData: {
          data: action.payload,
        },
      };
    case SAVE_NFT_DATA:
      return {
        ...state,
        nftData: action.payload,
      };
    case SAVE_USER_WALLET_BALANCE:
       return {
        ...state,
        walletData: {
          data: action.payload
        }
      };
    default:
      return state;
  }
}
