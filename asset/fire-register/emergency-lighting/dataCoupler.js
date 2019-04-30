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
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('mailtoPass-function').href="mailto:maintenance@birtleyhouse.co.uk?subject=Monthly%20Function%20Test%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail-function').href="mailto:maintenance@birtleyhouse.co.uk?subject=Monthly%20Function%20Test%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
  document.getElementById('mailtoPass-drop').href="mailto:maintenance@birtleyhouse.co.uk?subject=Drop%20Test%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail-drop').href="mailto:maintenance@birtleyhouse.co.uk?subject=Drop%20Test%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
}

dataCouple();
