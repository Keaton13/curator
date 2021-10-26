import { CONNECT_TO_COINMARKETCAP_API } from './types';

export const connectToApi = () => dispach => {
    fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': '485fb1f7-77fa-4b36-863c-b6727a18c43d',
          }
      })
        .then(res => {
          console.log(res);
          const data = res.json();
          return data;
        })
        .then(data => {
          dispach({
            type: CONNECT_TO_COINMARKETCAP_API,
            payload: data
          });
        })
        .catch(err => {
          console.error(err);
        });
}