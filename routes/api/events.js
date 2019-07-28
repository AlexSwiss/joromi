const express = require('express');
const router = express.Router();

//event model
const Event = require('../../models/Events');

//@route GET api/events
router.get('/', (req, res) => {
    Event.find()
        .sort({date: -1})
        .then(events => res.json(events));
});

//@router POST api/items
router.post('/', (req, res) => {
    const newEvent = new Event ({
        name: req.body.name,
        venue: req.body.venue,
        price: req.body.price
    });
    newEvent.save()
            .then( event => res.json(event));
});



module.exports = router;