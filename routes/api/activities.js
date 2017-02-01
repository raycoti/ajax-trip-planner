var express = require('express');
var router = express.Router();
var Activity = require('../../models/activity');

router.get('/', (req, res, next) => {
    //console.log('get activities');
    Activity.findAll({})
    .then((activities) => {
        //console.log(activities);
        res.send(activities);
        }
    )
});

router.post('/',(req, res, next) => {
    console.log('post activities');
});

router.put('/', (req, res, next) => {
    console.log('put activities');
});

router.delete('/', (req, res, next) => {
    console.log('delete activities');
});




module.exports = router;

