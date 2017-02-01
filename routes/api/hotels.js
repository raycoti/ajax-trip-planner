var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
router.get('/', (req, res, next) => {
    Hotel.findAll({})
    .then((hotels) => {
        //console.log(activities);
        res.send(hotels);
        }
    )
});

router.post('/',(req, res, next) => {
    console.log('post hotels');
      res.send('hi');
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