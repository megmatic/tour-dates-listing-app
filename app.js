const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const TourDate = require('./models/TourDate');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/newtourdate', async (req, res) => {
    const tourdate = new TourDate({venue: 'red rocks', city: 'denver'});
    await tourdate.save();
    res.send(tourdate);
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
    console.log('beem me up scotty');
});

app.listen(3000, () => {
    console.log('serving realness on port 3000')
})