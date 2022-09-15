import { CONNECT_TO_COINMARKETCAP_API, GET_COIN_METADATA } from './types';

export const connectToApi = () => dispach => {
  console.log("In redux reducer")
    fetch('http://localhost:3001/api/CoinMarketcapData')
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
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ids}`, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': '485fb1f7-77fa-4b36-863c-b6727a18c43d',
            "Access-Control-Allow-Origin": "*"
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