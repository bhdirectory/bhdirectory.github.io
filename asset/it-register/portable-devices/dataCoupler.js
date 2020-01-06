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
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('department').innerText=coaches.isRelatedTo.identifier.description;
  document.getElementById('assignment').innerText=coaches.isRelatedTo.identifier.value;
}

dataCouple();
