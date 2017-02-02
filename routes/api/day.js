var express = require('express');
var router = express.Router();

var Day = require('../../models/day');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');

router.get('/', (req, res, next) => {
    //console.log('get activities');
    Day.findAll({
      include: [ Hotel, Restaurant, Activity ]
    })
    .then((days) => {
      res.send(days)
    })
});

//routes for all days
router.post('/',(req, res, next) => {
  res.send('hi day')
});

router.put('/', (req, res, next) => {
  res.send('hi day')
});

router.delete('/', (req, res, next) => {
  res.send('hi day')
});

//routes for specific day
router.get('/:id', (req, res, next) => {
  Day.findOne({
    where: {
      id: req.params.id
    }
  }).then((day) => {
    res.send(day);
  })
});

router.post('/:id', (req, res, next) => {
  res.send(req.params.id)
});

router.put('/:id', (req, res, next) => {
  res.send(req.params.id)
});

router.delete('/:id', (req, res, next) => {
  res.send(req.params.id)
});

//routes for restaurants
router.post('/:id/restaurants', (req, res, next) => {
  res.send(req.params.id)
});

router.delete('/:id/restaurants', (req, res, next) => {
  res.send(req.params.id)
});

//routes for hotels
router.post('/:id/hotels', (req, res, next) => {
  res.send(req.params.id)
});

router.delete('/:id/hotels', (req, res, next) => {
  res.send(req.params.id)
});

//routes for activities
router.post('/:id/activities', (req, res, next) => {
  res.send(req.params.id)
});

router.delete('/:id/activities', (req, res, next) => {
  res.send(req.params.id)
});

module.exports = router;
