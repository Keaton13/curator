const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3001;
const app = express();

// Middleware
const options = {
  origin: 'http://localhost:3000',
  }
app.use(cors(options))
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

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



app.listen(port, () => console.log(`Server Running On Port ${port}...`));
