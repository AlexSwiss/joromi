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

module.exports = router;