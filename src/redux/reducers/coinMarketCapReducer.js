import { CONNECT_TO_COINMARKETCAP_API, GET_COIN_METADATA } from '../actions/types'

const initalState = {
    coinData: {
        data: null
    },
    coinMetaData: []
}

export default function (state = initalState, action) {
    switch (action.type) {
        case CONNECT_TO_COINMARKETCAP_API:
            return {
                coinData: {
                    data: action.payload
                }
            }
        case GET_COIN_METADATA:
            return {
                coinMetaData: action.payload
            }
            default: 
                return state;
    }
}