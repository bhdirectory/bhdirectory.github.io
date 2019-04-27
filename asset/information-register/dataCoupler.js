/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('object').innerText=coaches.object.name;
  document.getElementById('object').href=coaches.object.url;
  document.getElementById('participant').innerText=coaches.participant;
  document.getElementById('agent').innerText=coaches.agent;
  document.getElementById('toLocation').innerText=coaches.toLocation;
  document.getElementById('instrument').innerText=coaches.instrument;
  document.getElementById('transferMethod').innerText=coaches.recipient.name;
  document.getElementById('transferMethod').href=coaches.recipient.url;
  document.getElementById('lastReviewed').innerText=coaches.mainEntityOfPage.lastReviewed;
  document.getElementById('lawfulBasis').innerText=coaches.isRelatedTo[0].name;
  document.getElementById('legislation').innerText=coaches.isRelatedTo[0].description;
  document.getElementById('legislation').href=coaches.isRelatedTo[0].url;
  document.getElementById('lawfulCondition').innerText=coaches.isRelatedTo[1].name;
  document.getElementById('condition').innerText=coaches.isRelatedTo[1].description;
  document.getElementById('condition').href=coaches.isRelatedTo[1].url;
}

dataCouple();
