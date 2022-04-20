import { SAVE_USER_TRANSACTIONS } from "../actions/types";

const initalState = {
    transactions: {
        data: null
    },
    totalGas: null
}

export default function (state = initalState, action) {
    switch (action.type) {
        case SAVE_USER_TRANSACTIONS:
            return {
                ...state,
                totalGas: action.payload
            }
            default: 
                return state;
    }
}