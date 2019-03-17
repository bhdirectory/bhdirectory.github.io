/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coachThree = JSON.parse(document.querySelector('#coachThree').innerText);
  document.title=coachThree.headline;
  document.getElementById('headerTitle').innerText=coachThree.headline;
  
  var coachOne = JSON.parse(document.querySelector('#coachOne').innerText);
  document.getElementById('assetId').innerText=coachOne.identifier.value;
  document.getElementById('make').innerText=coachOne.manufacturer.name;
  document.getElementById('make').href=coachOne.manufacturer.url;
  document.getElementById('model').innerText=coachOne.model;
  document.getElementById('sn').innerText=coachOne.serialNumber;
  document.getElementById('location').innerText=coachOne.location.name;
  document.getElementById('location').href=coachOne.location.url;
  document.getElementById('condition').innerText=coachOne.itemCondition;
  document.getElementById('mailReport').href="mailto:maintenance@birtleyhouse.co.uk?subject=Lift%20Issue%20REPORT%20" + coachOne.manufacturer.name + "&body=";

}

dataCouple();
