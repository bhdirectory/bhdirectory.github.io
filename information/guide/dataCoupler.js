/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('home').innerText=coaches.isPartOf.name;
  document.getElementById('home').href=coaches.isPartOf.url;
  document.getElementById('breadcrumb').innerText=coaches.breadcrumb.name;
  document.getElementById('breadcrumb').href=coaches.breadcrumb.url;
  document.getElementById('headerTitle').innerText=coaches.headline;
}

dataCouple();
