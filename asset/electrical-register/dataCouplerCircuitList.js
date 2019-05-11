/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.getElementById('c0').innerText=coaches.isRelatedTo[2].itemListElement[0].item.name;
  document.getElementById('c0').href=coaches.isRelatedTo[2].itemListElement[0].item.url;

}

dataCouple();
