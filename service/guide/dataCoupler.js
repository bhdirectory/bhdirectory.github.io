/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('h0').innerText=coaches.breadcrumb.itemListElement[0].item.name;
  document.getElementById('h0').href=coaches.breadcrumb.itemListElement[0].item.url;
  document.getElementById('h1').innerText=coaches.breadcrumb.itemListElement[1].item.name;
  document.getElementById('h1').href=coaches.breadcrumb.itemListElement[1].item.url;
  document.getElementById('h2').innerText=coaches.breadcrumb.itemListElement[2].item.name;
  document.getElementById('h2').href=coaches.breadcrumb.itemListElement[2].item.url;
  document.getElementById('headerTitle').innerText=coaches.headline;
  document.getElementById('text').innerText=coaches.text;
}

dataCouple();
