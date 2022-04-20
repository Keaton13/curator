import { SAVE_USER_TRANSACTIONS, SAVE_USER_WALLET_INFO } from "../actions/types";

const initalState = {
    transactions: {
        data: null
    },
    transactionData: {
        data: null
    }
}

export default function (state = initalState, action) {
    switch (action.type) {
        case SAVE_USER_TRANSACTIONS:
            return {
                ...state,
                transactionData: {
                    data: action.payload
                }
            }
        case SAVE_USER_WALLET_INFO:
            return {
                ...state,
                transactions: {
                    data: action.payload
                }
            }
            default: 
                return state;
    }
}