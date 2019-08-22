/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('p0').innerText=coaches.itemListElement[0].item.name;
  document.getElementById('p0').href=coaches.itemListElement[0].item.url;
  document.getElementById('p1').innerText=coaches.itemListElement[1].item.name;
  document.getElementById('p1').href=coaches.itemListElement[1].item.url;
  document.getElementById('p2').innerText=coaches.itemListElement[2].item.name;
  document.getElementById('p2').href=coaches.itemListElement[2].item.url;
  document.getElementById('p3').innerText=coaches.itemListElement[3].item.name;
  document.getElementById('p3').href=coaches.itemListElement[3].item.url;
  document.getElementById('p4').innerText=coaches.itemListElement[4].item.name;
  document.getElementById('p4').href=coaches.itemListElement[4].item.url;
}

dataCouple();
