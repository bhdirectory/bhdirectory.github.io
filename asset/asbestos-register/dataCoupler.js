/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('headerTitle').innerText=coaches.headline;
  document.getElementById('up0').innerText="Latest" + coaches.hasPart[0].about + ": " + coaches.hasPart[0].datePublished;
  document.getElementById('uptxt0').innerText=coaches.hasPart[0].text;
}

dataCouple();
