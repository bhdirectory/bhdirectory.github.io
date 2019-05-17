/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('up0').innerText=coaches.mainEntityOfPage.hasPart[0].datePublished + " - " + coaches.mainEntityOfPage.hasPart[0].text;
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
  document.getElementById('a7').innerText=coaches.itemListElement[7].item.name;
  document.getElementById('a7').href=coaches.itemListElement[7].item.url;
  document.getElementById('a8').innerText=coaches.itemListElement[8].item.name;
  document.getElementById('a8').href=coaches.itemListElement[8].item.url;
  document.getElementById('a9').innerText=coaches.itemListElement[9].item.name;
  document.getElementById('a9').href=coaches.itemListElement[9].item.url;
  document.getElementById('a10').innerText=coaches.itemListElement[10].item.name;
  document.getElementById('a10').href=coaches.itemListElement[10].item.url;
  document.getElementById('a11').innerText=coaches.itemListElement[11].item.name;
  document.getElementById('a11').href=coaches.itemListElement[11].item.url;
  document.getElementById('a12').innerText=coaches.itemListElement[12].item.name;
  document.getElementById('a12').href=coaches.itemListElement[12].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[13].item.name;
  document.getElementById('a13').href=coaches.itemListElement[13].item.url;
}

dataCouple();
