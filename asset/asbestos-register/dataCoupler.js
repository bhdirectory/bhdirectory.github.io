/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('headerTitle').innerText=coaches.headline;
  document.getElementById('up0').innerText=coaches.hasPart[0].datePublished + " - " + coaches.hasPart[0].text;
  document.getElementById('up1').innerText=coaches.hasPart[1].datePublished + " - " + coaches.hasPart[1].text;
  document.getElementById('up2').innerText=coaches.hasPart[2].datePublished + " - " + coaches.hasPart[2].text;
}

dataCouple();
