/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('make').innerText=coaches.manufacturer.name;
  document.getElementById('make').href=coaches.manufacturer.url;
  document.getElementById('model').innerText=coaches.model.name;
  document.getElementById('model').href=coaches.model.url;
  document.getElementById('sn').innerText=coaches.serialNumber;
  document.getElementById('date').innerText=coaches.purchaseDate;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('condition').innerText=coaches.itemCondition;
}

dataCouple();
