import { CONNECT_TO_COINMARKETCAP_API, GET_COIN_METADATA } from '../actions/types'

const initalState = {
    coinData: {
        data: null
    },
    coinMetaData: {
        data: null
    }
}

export default function (state = initalState, action) {
    console.log('test');
    switch (action.type) {
        case CONNECT_TO_COINMARKETCAP_API:
            return {
                ...state,
                coinData: {
                    data: action.payload
                }
            }
        case GET_COIN_METADATA:
            return {
                ...state,
                coinMetaData: {
                    data: action.payload
                }
            }
            default: 
                return state;
    }
}