import { CONNECT_TO_COINMARKETCAP_API } from '../actions/types'

const initalState = {
    coinData: {
        data: null
    }
}

export default function (state = initalState, action) {
    switch (action.type) {
        case CONNECT_TO_COINMARKETCAP_API:
            return {
                coinData: {
                    data: action.payload
                }
            }
            default: 
                return state;
    }
}