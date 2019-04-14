/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('p0').innerText=coaches.itemListElement[0].position;
  document.getElementById('p1').innerText=coaches.itemListElement[1].position;
  document.getElementById('p2').innerText=coaches.itemListElement[2].position;
  document.getElementById('p3').innerText=coaches.itemListElement[3].position;
  document.getElementById('p4').innerText=coaches.itemListElement[4].position;
  document.getElementById('p5').innerText=coaches.itemListElement[5].position;
  document.getElementById('p6').innerText=coaches.itemListElement[6].position;
  document.getElementById('p7').innerText=coaches.itemListElement[7].position;
  document.getElementById('p8').innerText=coaches.itemListElement[8].position;
  document.getElementById('p9').innerText=coaches.itemListElement[9].position;
  document.getElementById('p10').innerText=coaches.itemListElement[10].position;
  document.getElementById('p11').innerText=coaches.itemListElement[11].position;
  document.getElementById('p12').innerText=coaches.itemListElement[12].position;
  document.getElementById('p13').innerText=coaches.itemListElement[13].position;
  document.getElementById('p14').innerText=coaches.itemListElement[14].position;
  document.getElementById('p15').innerText=coaches.itemListElement[15].position;
  document.getElementById('p16').innerText=coaches.itemListElement[16].position;
  document.getElementById('p17').innerText=coaches.itemListElement[17].position;
  document.getElementById('p18').innerText=coaches.itemListElement[18].position;
  document.getElementById('p19').innerText=coaches.itemListElement[19].position;
  document.getElementById('p20').innerText=coaches.itemListElement[20].position;
  document.getElementById('p21').innerText=coaches.itemListElement[21].position;
  document.getElementById('p22').innerText=coaches.itemListElement[22].position;
  document.getElementById('p23').innerText=coaches.itemListElement[23].position;
  document.getElementById('p24').innerText=coaches.itemListElement[24].position;
  document.getElementById('p25').innerText=coaches.itemListElement[25].position;
  document.getElementById('p26').innerText=coaches.itemListElement[26].position;
  document.getElementById('p27').innerText=coaches.itemListElement[27].position;
  document.getElementById('p28').innerText=coaches.itemListElement[28].position;
  document.getElementById('p29').innerText=coaches.itemListElement[29].position;
  document.getElementById('p30').innerText=coaches.itemListElement[30].position;
}

dataCouple();
