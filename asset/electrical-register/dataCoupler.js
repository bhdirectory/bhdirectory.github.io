/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('category').innerText=coaches.category;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('inspection').innerText=coaches.subjectOf.validFrom;
  document.getElementById('inspection').href=coaches.subjectOf.url;
  document.getElementById('inspectionDue').innerText=coaches.subjectOf.validUntil;
  document.getElementById('feed').innerText=coaches.isRelatedTo[0].itemListElement[0].item.name;
  document.getElementById('feed').href=coaches.isRelatedTo[0].itemListElement[0].item.url;
  document.getElementById('d0').innerText=coaches.isRelatedTo[1].itemListElement[0].item.name;
  document.getElementById('d0').href=coaches.isRelatedTo[1].itemListElement[0].item.url;
  document.getElementById('d1').innerText=coaches.isRelatedTo[1].itemListElement[1].item.name;
  document.getElementById('d1').href=coaches.isRelatedTo[1].itemListElement[1].item.url;
  document.getElementById('d2').innerText=coaches.isRelatedTo[1].itemListElement[2].item.name;
  document.getElementById('d2').href=coaches.isRelatedTo[1].itemListElement[2].item.url;
  document.getElementById('c0').innerText=coaches.isRelatedTo[2].itemListElement[0].item.name;
  document.getElementById('c0').href=coaches.isRelatedTo[2].itemListElement[0].item.url;

}

dataCouple();
