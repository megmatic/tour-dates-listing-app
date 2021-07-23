const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourDateSchema = new Schema({
    date: {
        type: String,
        // required: true
    },
    venue: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    tickets: {
        type: String,
        // default: true
    },

})

const TourDate = mongoose.model('TourDate', TourDateSchema)

module.exports = TourDate;

//GET /tourdates - gets all tourdates
//POST /tourdates - creates a new tourdate
//PATCH /tourdates/:id - updates a tourdate
//DELETE /tourdates/:id - deletes a tourdate