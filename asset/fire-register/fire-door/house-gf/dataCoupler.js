/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.identifier;
  document.getElementById('headerTitle').innerText=coaches.location.name + " " + "(" + coaches.category + ")";
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('closer').innerText=coaches.isRelatedTo[0].model.name;
  document.getElementById('closer').href=coaches.isRelatedTo[0].model.url;
  document.getElementById('hold').innerText=coaches.isRelatedTo[1].description;
  document.getElementById('hinge').innerText=coaches.isRelatedTo[2].description;
  document.getElementById('sign').innerText=coaches.isRelatedTo[3].description;
  document.getElementById('glass').innerText=coaches.isRelatedTo[4].description;
  document.getElementById('lock').innerText=coaches.isRelatedTo[5].description;
  document.getElementById('seal').innerText=coaches.isRelatedTo[6].description;
  document.getElementById('mailtoPass-test').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Weekly%Test%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail-test').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Weekly%Test%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Inspection%20PASS%20" + coaches.identifier + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Fire%20Door%20Inspection%20FAIL%20" + coaches.identifier + "&body=Reason%20for%20failure:&20";
}

dataCouple();
