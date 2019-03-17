/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coach = JSON.parse(document.querySelector('#coach').innerText);
  document.title=coach.headline;
  document.getElementById('headerTitle').innerText=coach.headline;
}

dataCouple();
