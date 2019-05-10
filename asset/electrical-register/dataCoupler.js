/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('category').innerText=coaches.category;
  document.getElementById('location').innerText=coaches.location.name;
  document.getElementById('location').href=coaches.location.url;
  document.getElementById('inspection').innerText=coaches.subjectOf.validFrom;
  document.getElementById('inspection').href=coaches.subjectOf.url;
  document.getElementById('inspectionDue').innerText=coaches.subjectOf.validUntil;
  document.getElementById('d0').innerText=coaches.isRelatedTo[1].itemListElement.item[0].name;
  document.getElementById('d0').href=coaches.isRelatedTo[1].itemListElement.item[0].url;
  document.getElementById('d1').innerText=coaches.isRelatedTo[1].itemListElement.item[1].name;
  document.getElementById('d1').href=coaches.isRelatedTo[1].itemListElement.item[1].url;
  document.getElementById('d2').innerText=coaches.isRelatedTo[1].itemListElement.item[2].name;
  document.getElementById('d2').href=coaches.isRelatedTo[1].itemListElement.item[2].url;

}

dataCouple();
