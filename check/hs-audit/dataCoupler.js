/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coachThree = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('headerTitle').innerText=coaches.headline;
}

dataCouple();
