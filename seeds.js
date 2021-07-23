const mongoose = require('mongoose');
const TourDate = require('./models/TourDate');
require('dotenv/config');

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("beem me up scotty");
});


const seedTourDates = [
    {
        date: "Jul. 29 2021",
        venue: "Lollapalooza",
        city: "Chicago",
        state: "IL",
        tickets: true
    },
    {
        date: "Sep. 4 2021",
        venue: "BottleRock Festival",
        city: "Napa",
        state: "CA",
        tickets: true
    },
    {
        date: "Sep. 17 2021",
        venue: "Summerfest",
        city: "Milwaukee",
        state: "WI",
        tickets: true
    },
    {
        date: "Sep. 19 2021",
        venue: "Music Midtown Festival",
        city: "Atlanta",
        state: "GA",
        tickets: true
    },
    {
        date: "Oct. 1 2021",
        venue: "Austin City Limits Festival",
        city: "Austin",
        state: "TX",
        tickets: true
    },
    {
        date: "Oct. 8 2021",
        venue: "Austin City Limits Festival",
        city: "Austin",
        state: "TX",
        tickets: true
    }
];

TourDate.insertMany(seedTourDates)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })