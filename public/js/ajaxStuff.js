
/*$.get('/api/restaurants')

.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    console.log(restaurant.name);
  });
})
.catch( console.error.bind(console) );
*/
//$(function(){
$.get('/api/activities')
.then(function (activities) {
    //console.log(activities);
  activities.forEach(function(activity){
    appStore.dispatch({
    type: 'ADD_ACTIVITY',
    activity
  })
  })
})
.catch( console.error.bind(console) );
$.get('/api/restaurants')
.then(function (restaurants) {
    //console.log(activities);
  restaurants.forEach(function(restaurant){
    appStore.dispatch({
    type: 'ADD_RESTAURANT',
    restaurant
  })
  })
})
.catch( console.error.bind(console) );
$.get('/api/hotels')
.then(function (hotels) {
    //console.log(activities);
  hotels.forEach(function(hotel){
    appStore.dispatch({
    type: 'ADD_HOTEL',
    hotel
  })
  })
})

//get all the days
//will need to update via dispatch
$.get('/api/days')
.then(function (days) {
  console.log(days);
  days.forEach(function(day){
    appStore.dispatch({
    type: 'ADD_DAY',
    day: {
      hotels: [day.hotel],
      restaurants: day.restaurants,
      activities: day.activities
      }
    })
  })
})
.catch( console.error.bind(console));



