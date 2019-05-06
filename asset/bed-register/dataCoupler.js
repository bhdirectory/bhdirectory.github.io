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
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Bed%20Check%20PASS%20" + coaches.identifier.value + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Bed%20Check%20FAIL%20" + coaches.identifier.value + "&body=Reason%20for%20failure:&20";
  document.getElementById('handsetMake').innerText=coaches.isRelatedTo.manufacturer.name;
  document.getElementById('handsetMake').href=coaches.isRelatedTo.manufacturer.url;
  document.getElementById('handsetModel').innerText=coaches.isRelatedTo.model.name;
  document.getElementById('handsetModel').href=coaches.isRelatedTo.model.url;
  document.getElementById('handsetCondition').innerText=coaches.isRelatedTo.itemCondition;
}

dataCouple();
