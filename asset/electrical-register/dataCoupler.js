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
  document.getElementById('d3').innerText=coaches.isRelatedTo[1].itemListElement[3].item.name;
  document.getElementById('d3').href=coaches.isRelatedTo[1].itemListElement[3].item.url;
  document.getElementById('d4').innerText=coaches.isRelatedTo[1].itemListElement[4].item.name;
  document.getElementById('d4').href=coaches.isRelatedTo[1].itemListElement[4].item.url;
  document.getElementById('d5').innerText=coaches.isRelatedTo[1].itemListElement[5].item.name;
  document.getElementById('d5').href=coaches.isRelatedTo[1].itemListElement[5].item.url;
  document.getElementById('d6').innerText=coaches.isRelatedTo[1].itemListElement[6].item.name;
  document.getElementById('d6').href=coaches.isRelatedTo[1].itemListElement[6].item.url;
  document.getElementById('d7').innerText=coaches.isRelatedTo[1].itemListElement[7].item.name;
  document.getElementById('d7').href=coaches.isRelatedTo[1].itemListElement[7].item.url;
  document.getElementById('d8').innerText=coaches.isRelatedTo[1].itemListElement[8].item.name;
  document.getElementById('d8').href=coaches.isRelatedTo[1].itemListElement[8].item.url;
  document.getElementById('d9').innerText=coaches.isRelatedTo[1].itemListElement[9].item.name;
  document.getElementById('d9').href=coaches.isRelatedTo[1].itemListElement[9].item.url;
  document.getElementById('d10').innerText=coaches.isRelatedTo[1].itemListElement[10].item.name;
  document.getElementById('d10').href=coaches.isRelatedTo[1].itemListElement[10].item.url;
  document.getElementById('d11').innerText=coaches.isRelatedTo[1].itemListElement[11].item.name;
  document.getElementById('d11').href=coaches.isRelatedTo[1].itemListElement[11].item.url;
  document.getElementById('d12').innerText=coaches.isRelatedTo[1].itemListElement[12].item.name;
  document.getElementById('d12').href=coaches.isRelatedTo[1].itemListElement[12].item.url;
  document.getElementById('d13').innerText=coaches.isRelatedTo[1].itemListElement[13].item.name;
  document.getElementById('d13').href=coaches.isRelatedTo[1].itemListElement[13].item.url;
  document.getElementById('d14').innerText=coaches.isRelatedTo[1].itemListElement[14].item.name;
  document.getElementById('d14').href=coaches.isRelatedTo[1].itemListElement[14].item.url;
  document.getElementById('d15').innerText=coaches.isRelatedTo[1].itemListElement[15].item.name;
  document.getElementById('d15').href=coaches.isRelatedTo[1].itemListElement[15].item.url;
  document.getElementById('d16').innerText=coaches.isRelatedTo[1].itemListElement[16].item.name;
  document.getElementById('d16').href=coaches.isRelatedTo[1].itemListElement[16].item.url;
  document.getElementById('d17').innerText=coaches.isRelatedTo[1].itemListElement[17].item.name;
  document.getElementById('d17').href=coaches.isRelatedTo[1].itemListElement[17].item.url;

}

dataCouple();
