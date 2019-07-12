const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const EventSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    venue: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Event = mongoose.model('event', EventSchema);