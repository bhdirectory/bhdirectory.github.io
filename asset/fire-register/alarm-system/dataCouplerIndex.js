/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('toggle-item').innerText=coaches.mainEntityOfPage.text;
  document.getElementById('a0').innerText=coaches.itemListElement[0].item.name;
  document.getElementById('a0').href=coaches.itemListElement[0].item.url;
  document.getElementById('a1').innerText=coaches.itemListElement[1].item.name;
  document.getElementById('a1').href=coaches.itemListElement[1].item.url;
  document.getElementById('a2').innerText=coaches.itemListElement[2].item.name;
  document.getElementById('a2').href=coaches.itemListElement[2].item.url;
  document.getElementById('a3').innerText=coaches.itemListElement[3].item.name;
  document.getElementById('a3').href=coaches.itemListElement[3].item.url;
  document.getElementById('a4').innerText=coaches.itemListElement[4].item.name;
  document.getElementById('a4').href=coaches.itemListElement[4].item.url;
  document.getElementById('a5').innerText=coaches.itemListElement[5].item.name;
  document.getElementById('a5').href=coaches.itemListElement[5].item.url;
  document.getElementById('a6').innerText=coaches.itemListElement[6].item.name;
  document.getElementById('a6').href=coaches.itemListElement[6].item.url;
}

dataCouple();
