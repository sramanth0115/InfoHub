let path_ = require('path');
path_ = path_.join(__dirname, "keys.env")

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

let QUOTES = []
fetch_quotes = async()=>{
    try{
        let data = await fetch("https://dummyjson.com/quotes?limit=1400");
        QUOTES = await data.json();
        QUOTES = QUOTES.quotes
    }
    catch(e){
        console.log(e);
    }}
fetch_quotes();


app.get('/api/quote', (req, res)=>{
    try{
        let random_num = parseInt(Math.random() * QUOTES.length)
        res.json(QUOTES[random_num]);

    }
    catch(e){
        res.status(500).json({error: "Could not fetch Quote data."});
    }
})



app.get('/api/currency', async(req, res)=>{
    try{
           
        let data = await fetch("https://api.exchangerate-api.com/v4/latest/INR");
        let IND_rupValue = await data.json()
        IND_rupValue = IND_rupValue.rates;
            
        let amount = Number(req.query.amount);
        if (amount === undefined || isNaN(amount)){ 
            amount = 1;
        }

        if (!IND_rupValue || !IND_rupValue.USD || !IND_rupValue.EUR) {
            return res.status(500).json({ error: "Currency data is not available." });
          }
          

        let result = {usd:(amount * IND_rupValue.USD).toFixed(2), eur:(amount * IND_rupValue.EUR).toFixed(2)}
        result.usd = Number(result.usd), result.eur = Number(result.eur);
        res.json(result);
    }
    catch(e){
        res.status(500).json({error: "Could not fetch Currency data."});
    }
    
})




app.get('/api/weather', async(req, res)=>{
    try{
        let data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=17.4065&longitude=78.4772&current=temperature_2m,apparent_temperature,is_day,weather_code,cloud_cover&timezone=auto&forecast_days=1`);
        let weather = await data.json();
        let {timezone, current_units, current} = weather;
        let unit = current_units.temperature_2m
        let {temperature_2m, time} = current



        if ((!temperature_2m) || (!time)) {
            return res.status(500).json({ error: "Could not fetch weather data. API is down" });
          }
        res.json({timezone:timezone, time:time, temperature:`${temperature_2m} ${unit}` })
    }
    catch(e){
        res.status(500).json({error: "sra Could not fetch Weather data."});
    }
})

app.get('/', (req, resp)=>{ resp.send('InfoHub Server is running')})







