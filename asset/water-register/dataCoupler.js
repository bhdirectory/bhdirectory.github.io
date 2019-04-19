/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.alternateName;
  document.getElementById('model').innerText=coaches.model;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('condition').innerText=coaches.itemCondition;
  document.getElementById('category-0').innerText=coaches.category[0];
  document.getElementById('category-1').innerText=coaches.category[1];
  document.getElementById('tmvDetails').innerText=coaches.isRelatedTo.name;
  document.getElementById('tmvDetails').href=coaches.isRelatedTo.url;
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Temperature%20Check%20PASS%20" + coaches.alternateName + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Temperature%20Check%20FAIL%20" + coaches.alternateName + "&body=Reason%20for%20failure:&20";
}

dataCouple();
