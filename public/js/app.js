function AttractionSelect(attractions) {
  return Object.values(attractions)
    .reduce(
      ($select, attraction) =>
        $select.append(`<option value="${attraction.id}">${attraction.name}</option>`),
      $('<select />')
    )
}

function PlusButton(onClick) {
  return $(`<button class="btn btn-primary btn-circle pull-right">+</button>`)
    .on('click', onClick);
}

function AttractionChooser(type, attractions) {
  const $select = AttractionSelect(attractions);
  return $(`<div/>`)
    .append(`<h4>${type}</h4>`)
    .append($select)
    .append(PlusButton(function() {
      addAttractionToDay(type, $select.val());
    }))

}

function AttractionChoosers(state) {
  const $elem = $(`
    <div class="panel panel-default">
      <div class="panel-body" id="options-panel">

      </div>
    </div>
  `);

  $elem.find('#options-panel')
    .append(AttractionChooser('hotels', state.hotels))
    .append(AttractionChooser('restaurants', state.restaurants))
    .append(AttractionChooser('activities', state.activities))

  return $elem;
}

function CurrentDayHeader(currentDay) {
  if(currentDay === null) { return; }
  return $(`
    <h3>
      <span id="day-title">
        <span>Day ${currentDay + 1}</span>
        <button class="btn btn-xs btn-danger remove btn-circle">x</button>
      </span>
    </h3>
  `)
}

function DayButton(i, currentDay) {
  return $(`
    <button class="btn btn-circle day-btn">${i+1}</button>
  `)
  .addClass(i === currentDay ? 'current-day': null)
  .on('click', function() {
    setCurrentDay(i);
  })
}

function DayButtons(days, currentDay) {
  /**
   * <span><button></button><button></button></span>
   */
  return days.reduce(
    ($span, day, i) => $span.append(DayButton(i, currentDay)),
    $('<span />')
  );
}

function DayNavigation(days, currentDay) {
  return $(`<div class="day-buttons"/>`)
    .append(DayButtons(days, currentDay))
    .append(PlusButton(function() {
      addDay();
    }))
}

function AttractionListItem(attraction) {
  console.log(attraction);
  return $(`
    <div class="itinerary-item">
      <span class="title">${attraction.name}</span>
      <button class="btn btn-xs btn-danger remove btn-circle">x</button>
    </div>`);
}

function AttractionList(attractions) {
  return attractions
    .reduce(
      ($ul, attraction) => $ul.append(AttractionListItem(attraction)),
      $(`<ul class="list-group"/>`)
    )
}

function AttractionListContainer(type, state) {
  const day = state.days[state.currentDay];
  if(!day) { return; }
  console.log('type', type)
  console.log('what',day[type]);
  if(day[type][0] !== null || day[type].length > 1){
    const attractions = day[type] //[hotel1, hotel2]
      .map(id => { //attraction.id?
        if(typeof id === 'object'){
          id = id.id
        }
        //console.log(state[type][id])
        console.log('id',id)
      return state[type][id];
      });

  console.log(attractions);
  return $(`<div />`)
    .append(`<h4>${type}</h4>`)
    .append(AttractionList(attractions))
}
else{
   return $(`<div />`)
    .append(`<h4>${type}</h4>`)
}
}

function DayPanel(state) {
  const $elem = $(`
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="day-buttons"></div>
      </div>
      <div class="panel-body" id="itinerary"></div>
    </div>
  `);

  $elem.find('.day-buttons')
    .append(DayNavigation(state.days, state.currentDay));

  $elem.find('#itinerary')
    .append(AttractionListContainer('hotels', state))
    .append(AttractionListContainer('restaurants', state))
    .append(AttractionListContainer('activities', state));

  return $elem;
}


function App(state) {
  return $(`<div class="col-xs-6 col-sm-12" />`)
    .append(AttractionChoosers(state))
    .append(CurrentDayHeader(state.currentDay))
    .append(DayPanel(state))
}

function render(state) {
  $('#control-panel')
    .html(App(state));
}

appStore.subscribe(render);
render(appStore.getState());
