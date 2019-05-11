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
  document.getElementById('feed').innerText=coaches.isRelatedTo[0].itemListElement[0].item.name;
  document.getElementById('feed').href=coaches.isRelatedTo[0].itemListElement[0].item.url;
  document.getElementById('ca0').innerText=coaches.isRelatedTo[1].itemListElement[0].item.name;
  document.getElementById('ca0').href=coaches.isRelatedTo[1].itemListElement[0].item.url;
  document.getElementById('ca1').innerText=coaches.isRelatedTo[1].itemListElement[1].item.name;
  document.getElementById('ca1').href=coaches.isRelatedTo[1].itemListElement[1].item.url;
  document.getElementById('ca2').innerText=coaches.isRelatedTo[1].itemListElement[2].item.name;
  document.getElementById('ca2').href=coaches.isRelatedTo[1].itemListElement[2].item.url;
  document.getElementById('ca3').innerText=coaches.isRelatedTo[1].itemListElement[3].item.name;
  document.getElementById('ca3').href=coaches.isRelatedTo[1].itemListElement[3].item.url;
  document.getElementById('ca4').innerText=coaches.isRelatedTo[1].itemListElement[4].item.name;
  document.getElementById('ca4').href=coaches.isRelatedTo[1].itemListElement[4].item.url;
  document.getElementById('ca5').innerText=coaches.isRelatedTo[1].itemListElement[5].item.name;
  document.getElementById('ca5').href=coaches.isRelatedTo[1].itemListElement[5].item.url;
  document.getElementById('ca6').innerText=coaches.isRelatedTo[1].itemListElement[6].item.name;
  document.getElementById('ca6').href=coaches.isRelatedTo[1].itemListElement[6].item.url;
  document.getElementById('ca7').innerText=coaches.isRelatedTo[1].itemListElement[7].item.name;
  document.getElementById('ca7').href=coaches.isRelatedTo[1].itemListElement[7].item.url;
  document.getElementById('ca8').innerText=coaches.isRelatedTo[1].itemListElement[8].item.name;
  document.getElementById('ca8').href=coaches.isRelatedTo[1].itemListElement[8].item.url;
  document.getElementById('ca9').innerText=coaches.isRelatedTo[1].itemListElement[9].item.name;
  document.getElementById('ca9').href=coaches.isRelatedTo[1].itemListElement[9].item.url;
  document.getElementById('ca10').innerText=coaches.isRelatedTo[1].itemListElement[10].item.name;
  document.getElementById('ca10').href=coaches.isRelatedTo[1].itemListElement[10].item.url;
  document.getElementById('ca11').innerText=coaches.isRelatedTo[1].itemListElement[11].item.name;
  document.getElementById('ca11').href=coaches.isRelatedTo[1].itemListElement[11].item.url;
  document.getElementById('ca12').innerText=coaches.isRelatedTo[1].itemListElement[12].item.name;
  document.getElementById('ca12').href=coaches.isRelatedTo[1].itemListElement[12].item.url;
  document.getElementById('ca13').innerText=coaches.isRelatedTo[1].itemListElement[13].item.name;
  document.getElementById('ca13').href=coaches.isRelatedTo[1].itemListElement[13].item.url;
  document.getElementById('ca14').innerText=coaches.isRelatedTo[1].itemListElement[14].item.name;
  document.getElementById('ca14').href=coaches.isRelatedTo[1].itemListElement[14].item.url;
  document.getElementById('ca15').innerText=coaches.isRelatedTo[1].itemListElement[15].item.name;
  document.getElementById('ca15').href=coaches.isRelatedTo[1].itemListElement[15].item.url;
  document.getElementById('ca16').innerText=coaches.isRelatedTo[1].itemListElement[16].item.name;
  document.getElementById('ca16').href=coaches.isRelatedTo[1].itemListElement[16].item.url;
  document.getElementById('ca17').innerText=coaches.isRelatedTo[1].itemListElement[17].item.name;
  document.getElementById('ca17').href=coaches.isRelatedTo[1].itemListElement[17].item.url;
}

dataCouple();
