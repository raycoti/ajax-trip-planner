
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

.catch( console.error.bind(console) );
//});


