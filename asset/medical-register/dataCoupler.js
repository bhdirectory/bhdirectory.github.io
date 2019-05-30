/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('headerTitle').innerText=coaches.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('make').innerText=coaches.manufacturer.name;
  document.getElementById('make').href=coaches.manufacturer.url;
  document.getElementById('model').innerText=coaches.model.name;
  document.getElementById('model').href=coaches.model.url;
  document.getElementById('sn').innerText=coaches.serialNumber;
  document.getElementById('date').innerText=coaches.purchaseDate;
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Medica%20Device%20Check%20PASS%20" + coaches.identifier + " | " + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Medica%20Device%20Check%20FAIL%20" + coaches.identifier + " | " + "&body=Reason%20for%20failure:&20";
  document.getElementById('service').innerText=coaches.isRelatedTo[0].provider.name;
  document.getElementById('service').href=coaches.isRelatedTo[0].provider.url;
  document.getElementById('inspection').innerText=coaches.subjectOf.validFrom;
  document.getElementById('inspection').href=coaches.subjectOf.url;
  document.getElementById('inspectionDue').innerText=coaches.subjectOf.validUntil;
}

dataCouple();
