var express = require('express');
var router = express.Router();
var Restaurant = require('../../models/restaurant');
router.get('/', (req, res, next) => {
        Restaurant.findAll({})
    .then((restaurant) => {
        //console.log(activities);
        res.send(restaurant);
        }
    )
});

router.post('/',(req, res, next) => {
    console.log('post restaurants');
});

router.put('/', (req, res, next) => {
    console.log('put restaurants');
});

router.delete('/', (req, res, next) => {
    console.log('delete restaurants');
});

module.exports = router;