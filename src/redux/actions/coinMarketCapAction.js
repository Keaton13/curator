import { CONNECT_TO_COINMARKETCAP_API } from './types';

export const connectToApi = () => dispach => {
    dispach({
        type: CONNECT_TO_COINMARKETCAP_API,
        payload: null
    });
}