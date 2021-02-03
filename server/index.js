require('dotenv').config();
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const axios = require('axios');
const { weather_api_key, city } = process.env;
const PORT = 9999;

app.use(express.static('public'));

app.get('/api', (req, res) => {
    console.log('someone wants the weather!');
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}`;
    axios.get(URL)
      .then(resp => {
        //console.log(resp.data);
        res.json(resp.data);
      })

})

server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});