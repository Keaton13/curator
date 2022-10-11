const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
let PORT = process.env.PORT

// Middleware  }
app.use(cors())
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
  console.log(__dirname)
  app.use(express.static(path.join(__dirname, '/public')));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../src', 'index.js'));
  // })
} else {
  app.get('/', async (req, res) => {
    res.send('Api running')
  })
}

// API HERE
app.get("/api/CoinMarketcapData", async (req, res) => {
    console.log("Inside API YOOOO")
    var config = {
      credentials: 'include',
      method: 'GET',
      url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      headers: { 
        'X-CMC_PRO_API_KEY': '485fb1f7-77fa-4b36-863c-b6727a18c43d'
      }
    };
    
    axios(config)
    .then(function (response) {
      let data = JSON.stringify(response.data);
      res.send(data);
    })
    .catch(function (error) {
      console.log(error);
    });
      
});

app.post("/api/CoinMetaData", async (req, res) => {
  console.log("Inside API 2.0 YOOOO");
  const {ids} = req.body;
  var config = {
    credentials: 'include',
    method: 'GET',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ids}`,
    headers: {
      'X-CMC_PRO_API_KEY': '485fb1f7-77fa-4b36-863c-b6727a18c43d',
      "Access-Control-Allow-Origin": "*"
    }
  }

  axios(config)
  .then(function (response) {
    let data = JSON.stringify(response.data);
    res.send(data);
  })
  .catch(function (error) {
    console.log(error);
  });
})

if (PORT == null || PORT == "") {
  PORT = 3001;
}
app.listen(PORT, () => console.log(`Server Running On Port ${PORT}...`));