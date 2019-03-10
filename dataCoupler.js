/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var coachOne = JSON.parse(document.querySelector('#coachOne').innerText);
  document.getElementById('assetId').innerText=coachOne.identifier.value;
  document.getElementById('make').innerText=coachOne.manufacturer.name;
  document.getElementById('make').href=coachOne.manufacturer.url;
  document.getElementById('model').innerText=coachOne.model.name;
  document.getElementById('model').href=coachOne.model.url;
  document.getElementById('sn').innerText=coachOne.serialNumber;
  document.getElementById('location').innerText=coachOne.location.name;
  document.getElementById('location').href=coachOne.location.url;
  document.getElementById('condition').innerText=coachOne.itemCondition;
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Bed%20Check%20PASS%20" + coachOne.identifier.value + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Bed%20Check%20FAIL%20" + coachOne.identifier.value + "&body=Reason%20for%20failure:&20";

  var coachTwo = JSON.parse(document.querySelector('#coachTwo').innerText);
  document.getElementById('handsetMake').innerText=coachTwo.manufacturer.name;
  document.getElementById('handsetMake').href=coachTwo.manufacturer.url;
  document.getElementById('handsetModel').innerText=coachTwo.model.name;
  document.getElementById('handsetModel').href=coachTwo.model.url;
  document.getElementById('handsetCondition').innerText=coachTwo.itemCondition;

  var coachThree = JSON.parse(document.querySelector('#coachThree').innerText);
  document.title=coachThree.headline;
  document.getElementById('headerTitle').innerText=coachThree.headline;
}

myFunction();
