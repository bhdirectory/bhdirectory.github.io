/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('mailtoPass-test').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Weekly%Test%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail-test').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Weekly%Test%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Inspection%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Inspection%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
  document.getElementById('adcMake').innerText=coaches.isRelatedTo.manufacturer.name;
  document.getElementById('adcMake').href=coaches.isRelatedTo.manufacturer.url;
  document.getElementById('adcModel').innerText=coaches.isRelatedTo.model.name;
  document.getElementById('adcModel').href=coaches.isRelatedTo.model.url;
  document.getElementById('adcCondition').innerText=coaches.isRelatedTo.itemCondition;
}

dataCouple();
