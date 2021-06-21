const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourDateSchema = new Schema({
    date: String,
    venue: String,
    time: String,
    city: String,
    state: String,
    tickets: Boolean,

})

module.exports = mongoose.model('Tour Dates', TourDateSchema);