import { CONNECT_TO_COINMARKETCAP_API, GET_COIN_METADATA } from './types';

export const connectToApi = () => dispach => {
    fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': '485fb1f7-77fa-4b36-863c-b6727a18c43d',
          }
      })
        .then(res => {
          const data = res.json();
          return data;
        })
        .then(data => {
          return data
        })
        .then(data => {
          dispach({
            type: CONNECT_TO_COINMARKETCAP_API,
            payload: data.data
          });
          // return Promise.resolve(data);;
        })
        .catch(err => {
          console.error(err);
        });
}

export const getCoinMetaData = (data) => dispach => {
    let ids = ''
    for(let i=0; i<data.length; i++){
        if(i === 99){
            ids = ids + data[i]
        } else {
            ids = ids + data[i] + ","
        }
    }
    console.log(ids)
    fetch(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ids}`, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': '485fb1f7-77fa-4b36-863c-b6727a18c43d',
          }
      })
        .then(res => {
          const result = res.json();
          return result;
        })
        .then(result => {
          dispach({
            type: GET_COIN_METADATA,
            payload: result.data
          });
          return Promise.resolve();
        })
        .catch(err => {
          console.error(err);
        });
}