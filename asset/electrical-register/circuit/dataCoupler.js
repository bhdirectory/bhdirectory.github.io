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
  document.getElementById('ca0').innerText=coaches.isRelatedTo[1].itemListElement[0].item;
  document.getElementById('ca1').innerText=coaches.isRelatedTo[1].itemListElement[1].item;
  document.getElementById('ca2').innerText=coaches.isRelatedTo[1].itemListElement[2].item;
  document.getElementById('ca3').innerText=coaches.isRelatedTo[1].itemListElement[3].item;
  document.getElementById('ca4').innerText=coaches.isRelatedTo[1].itemListElement[4].item;
  document.getElementById('ca5').innerText=coaches.isRelatedTo[1].itemListElement[5].item;
  document.getElementById('ca6').innerText=coaches.isRelatedTo[1].itemListElement[6].item;
  document.getElementById('ca7').innerText=coaches.isRelatedTo[1].itemListElement[7].item;
  document.getElementById('ca8').innerText=coaches.isRelatedTo[1].itemListElement[8].item;
  document.getElementById('ca9').innerText=coaches.isRelatedTo[1].itemListElement[9].item;
  document.getElementById('ca10').innerText=coaches.isRelatedTo[1].itemListElement[10].item;
  document.getElementById('ca11').innerText=coaches.isRelatedTo[1].itemListElement[11].item;
}

dataCouple();
