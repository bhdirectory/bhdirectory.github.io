/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('up0').innerText=coaches.mainEntityOfPage.hasPart[0].datePublished + " - " + coaches.mainEntityOfPage.hasPart[0].text;
  document.getElementById('up1').innerText=coaches.mainEntityOfPage.hasPart[1].datePublished + " - " + coaches.mainEntityOfPage.hasPart[1].text;
  document.getElementById('p0').innerText=coaches.itemListElement[0].position;
  document.getElementById('a0').innerText=coaches.itemListElement[0].item.name;
  document.getElementById('a0').href=coaches.itemListElement[0].item.url;
  document.getElementById('p1').innerText=coaches.itemListElement[1].position;
  document.getElementById('a1').innerText=coaches.itemListElement[1].item.name;
  document.getElementById('a1').href=coaches.itemListElement[1].item.url;
  document.getElementById('p2').innerText=coaches.itemListElement[2].position;
  document.getElementById('a2').innerText=coaches.itemListElement[2].item.name;
  document.getElementById('a2').href=coaches.itemListElement[2].item.url;
  document.getElementById('p3').innerText=coaches.itemListElement[3].position;
  document.getElementById('a3').innerText=coaches.itemListElement[3].item.name;
  document.getElementById('a3').href=coaches.itemListElement[3].item.url;
}

dataCouple();
