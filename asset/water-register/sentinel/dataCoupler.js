/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline + " " + coaches.identifier;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline + " (" + coaches.location.name + ") ";
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('category').innerText=coaches.category;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('cws').innerText=coaches.isRelatedTo[0].name;
  document.getElementById('cws').href=coaches.isRelatedTo[0].url;
  document.getElementById('hws').innerText=coaches.isRelatedTo[1].name;
  document.getElementById('hws').href=coaches.isRelatedTo[1].url;
  document.getElementById('manufacturer').innerText=coaches.manufacturer.name;
  document.getElementById('model').innerText=coaches.model.name;
  document.getElementById('sn').innerText=coaches.serialNumber;
  document.getElementById('condition').innerText=coaches.condition;
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Sentinel%20Check%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Sentinel%20Check%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
}

dataCouple();
