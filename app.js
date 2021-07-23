const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')
const TourDate = require('./models/TourDate');
require('dotenv/config');


// Connect to db - from the Mongoose docs but adding in dotenv capabilities for server access security - this is the option that includes callbacks but not promises and using promises is the better way to go these days so about to change this 
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


// From the Mongoose docs
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("beem me up scotty");
});


// set view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



// render home page
app.get('/', async (req, res) => {
    const tourdates = await TourDate.find({});
    res.render('home', { tourdates });
});


app.get('/admin', async (req, res) => {
    const tourdates = await TourDate.find({});
    res.render('tour/admin', { tourdates });
})

app.get('/new', async (req, res) => {
    res.render('tour/new');
})

app.get('/tour/:id', async (req, res) => {
    const { id } = req.params;
    const tourdate = await TourDate.findById(id)
    res.render('tour/details', { tourdate });
})

app.get('/tour/:id/edit', async (req, res) => {
    const { id } = req.params;
    const tourdate = await TourDate.findById(id)
    res.render('tour/edit', { tourdate });
})

app.post('/tour', async (req, res) => {
    const newTourDate = new TourDate(req.body);
    await newTourDate.save();
    res.redirect('/')
})

app.put('/tour/:id', async(req, res) => {
    const { id } = req.params;
    const tourdate = await TourDate.findByIdAndUpdate(id, req.body, { runValidators: true, new: true});
    res.redirect(`/tour/${tourdate.id}`);
})

app.delete('/tour/:id', async(req, res) => {
    const { id } = req.params;
    await TourDate.findByIdAndDelete(id)
    res.redirect('/')

})

// app.get('/newtourdate', async (req, res) => {
//     const tourdate = new TourDate({venue: 'the amp', city: 'bville'});
//     await tourdate.save();
//     res.send(tourdate);
// });



// 
app.listen(3000, () => {
    console.log('serving up a slice of hot apple pie on port 3000')
})