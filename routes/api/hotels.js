var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Place = require('../../models/place');

router.get('/', (req, res, next) => {
    Hotel.findAll({
      include: [Place]
    })
    .then((hotels) => {
        //console.log(activities);
        res.send(hotels);
        }
    )
});

router.post('/',(req, res, next) => {
  res.send(console.log(req.body))
});

router.put('/', (req, res, next) => {
    console.log('put hotels');
      res.send('hi');
});

router.delete('/', (req, res, next) => {
    console.log('delete hotels');
      res.send('hi');
});

module.exports = router;
