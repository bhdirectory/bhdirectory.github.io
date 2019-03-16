/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coachThree = JSON.parse(document.querySelector('#coachThree').innerText);
  document.title=coachThree.headline;
  document.getElementById('headerTitle').innerText=coachThree.headline;
}

dataCouple();
