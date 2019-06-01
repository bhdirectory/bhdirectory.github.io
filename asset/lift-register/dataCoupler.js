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
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('date').innerText=coaches.purchaseDate;
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('mailReport').href="mailto:maintenance@birtleyhouse.co.uk?subject=Lift%20Issue%20REPORT%20" + coaches.manufacturer.name + "&body=";
  document.getElementById('service').innerText=coaches.isRelatedTo[0].provider.name;
  document.getElementById('service').href=coaches.isRelatedTo[0].provider.url;
  document.getElementById('insurance').innerText=coaches.isRelatedTo[1].provider.name;
  document.getElementById('insurance').href=coaches.isRelatedTo[1].provider.url;

}

dataCouple();
