/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('category').innerText=coaches.category;
  document.getElementById('agent').innerText=coaches.potentialAction.agent;
  document.getElementById('process-0').innerText=coaches.isRelatedTo[0].name;
  document.getElementById('process-0').href=coaches.isRelatedTo[0].url;
  document.getElementById('process-1').innerText=coaches.isRelatedTo[1].name;
  document.getElementById('process-1').href=coaches.isRelatedTo[1].url;
  document.getElementById('process-2').innerText=coaches.isRelatedTo[2].name;
  document.getElementById('process-2').href=coaches.isRelatedTo[2].url;
  document.getElementById('instrument').innerText=coaches.potentialAction.instrument;
  document.getElementById('location').innerText=coaches.potentialAction.location[0].name;
  document.getElementById('url').innerText=coaches.potentialAction.location[1].name;
  document.getElementById('url').href=coaches.potentialAction.location[1].url;
  document.getElementById('retention').innerText=coaches.potentialAction.result;
  document.getElementById('lastReviewed').innerText=coaches.mainEntityOfPage.lastReviewed;


}

dataCouple();
