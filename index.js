const connectToMongo=require('./db'); //this imports the function from db.js and connects the app to mongodb
const express = require('express'); //this creates server apis routes

connectToMongo(); //this runs the mongoDB connection function
// this function connects to mongodb and prints mongo connected

const app = express(); //creats express app
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('Hello World this is home!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
