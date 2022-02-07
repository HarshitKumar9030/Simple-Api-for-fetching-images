//By Harshit Kumar

const express = require('express');
const app = express();
const tokens = require('./config/tokens.json');
const images = require('./config/images.json');

app.get('/image/dog', (request, response) => {
     if(!request.query || !request.query.token || !validateToken(request.query.token)) {
       return response.json({error: "Invalid Token added!"});
     }//This ensures if the token is wrong . The api have to fetch invalid token
     
var dogapiurl = Math.floor(Math.random() * images.dimage.length)//Getting a random images
var dogimg = (String([images.dimage[dogapiurl]]))//Converting it to a string
const dimageObj = {
    url: (dogimg),
    title: 'Random Dog Image ',
    description: 'Random Dog Image '
}
    console.log("Dog api listening on /image/dog")//This is your endpoint
    response.json(dimageObj)
 });


const PORT = 3000;

app.listen(`${PORT}`, () => {
  console.log(`Website is listening on port ${PORT}`);
})

function validateToken(tokens) {
  if(tokens.includes(tokens)) {
    return true;
  } else {
    return false;
  }
}
