/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('one').innerText=coaches.itemListElement.position;
  document.getElementById('two').innerText=coaches.itemListElement[1].position;
}

dataCouple();
