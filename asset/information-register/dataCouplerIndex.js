/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
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
  document.getElementById('p4').innerText=coaches.itemListElement[4].position;
  document.getElementById('a4').innerText=coaches.itemListElement[4].item.name;
  document.getElementById('a4').href=coaches.itemListElement[4].item.url;
  document.getElementById('p5').innerText=coaches.itemListElement[5].position;
  document.getElementById('a5').innerText=coaches.itemListElement[5].item.name;
  document.getElementById('a5').href=coaches.itemListElement[5].item.url;
  document.getElementById('p6').innerText=coaches.itemListElement[6].position;
  document.getElementById('a6').innerText=coaches.itemListElement[6].item.name;
  document.getElementById('a6').href=coaches.itemListElement[6].item.url;
  document.getElementById('p7').innerText=coaches.itemListElement[7].position;
  document.getElementById('a7').innerText=coaches.itemListElement[7].item.name;
  document.getElementById('a7').href=coaches.itemListElement[7].item.url;
  document.getElementById('p8').innerText=coaches.itemListElement[8].position;
  document.getElementById('a8').innerText=coaches.itemListElement[8].item.name;
  document.getElementById('a8').href=coaches.itemListElement[8].item.url;
  document.getElementById('p9').innerText=coaches.itemListElement[9].position;
  document.getElementById('a9').innerText=coaches.itemListElement[9].item.name;
  document.getElementById('a9').href=coaches.itemListElement[9].item.url;
  document.getElementById('p10').innerText=coaches.itemListElement[10].position;
  document.getElementById('a10').innerText=coaches.itemListElement[10].item.name;
  document.getElementById('a10').href=coaches.itemListElement[10].item.url;
  document.getElementById('p11').innerText=coaches.itemListElement[11].position;
  document.getElementById('a11').innerText=coaches.itemListElement[11].item.name;
  document.getElementById('a11').href=coaches.itemListElement[11].item.url;
  document.getElementById('p12').innerText=coaches.itemListElement[12].position;
  document.getElementById('a12').innerText=coaches.itemListElement[12].item.name;
  document.getElementById('a12').href=coaches.itemListElement[12].item.url;
  
}

dataCouple();
