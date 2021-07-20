const express = require('express');
const app = express();
const nunjucks = require('nunjucks')
const fetch = require('node-fetch');
// configuraciones
nunjucks.configure('views',{
  autoescape: true,
  express: app
});
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const busquedaIP = req.query.busquedaIP;
  let primerIteracion;
  if (busquedaIP === undefined) {
    primerIteracion = true;
    res.render('index.html', {primerIteracion, sindatos: "Sin datos"})
  } else {
    fetch (`https://geo.ipify.org/api/v1?apiKey=at_xuhHS7c5w0zxTc8Wu1eAbAu46IWPd&ipAddress=${busquedaIP}`)
    .then (response => response.json())
    .then (datosJson => {
      primerIteracion = false;
      const ip = datosJson.ip;
      const region = datosJson.location.region;
      const city = datosJson.location.city;
      const lat = datosJson.location.lat;
      const lng = datosJson.location.lng;
      const isp = datosJson.isp;
      const timezone = datosJson.location.timezone;
      res.render('index.html', {primerIteracion, ip, region, city, timezone, lat, lng, isp})
    })
  }
})


app.listen(port, () => console.log("Iniciando"))