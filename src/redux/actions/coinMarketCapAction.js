import { CONNECT_TO_COINMARKETCAP_API, GET_COIN_METADATA } from './types';

export const connectToApi = () => dispach => {
  console.log("In redux reducer")
    fetch('https://curatorv2.herokuapp.com/api/CoinMarketcapData')
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
    fetch(`https://curatorv2.herokuapp.com/api/CoinMetaData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'ids': ids})
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