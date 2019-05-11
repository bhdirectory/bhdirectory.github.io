/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.getElementById('c0').innerText=coaches.isRelatedTo[2].itemListElement[0].item.name;
  document.getElementById('c0').href=coaches.isRelatedTo[2].itemListElement[0].item.url;
  document.getElementById('cd0').innerText=coaches.isRelatedTo[2].itemListElement[0].item.description;
  document.getElementById('c1').innerText=coaches.isRelatedTo[2].itemListElement[1].item.name;
  document.getElementById('c1').href=coaches.isRelatedTo[2].itemListElement[1].item.url;
  document.getElementById('c2').innerText=coaches.isRelatedTo[2].itemListElement[2].item.name;
  document.getElementById('c2').href=coaches.isRelatedTo[2].itemListElement[2].item.url;
  document.getElementById('c3').innerText=coaches.isRelatedTo[2].itemListElement[3].item.name;
  document.getElementById('c3').href=coaches.isRelatedTo[2].itemListElement[3].item.url;
  document.getElementById('c4').innerText=coaches.isRelatedTo[2].itemListElement[4].item.name;
  document.getElementById('c4').href=coaches.isRelatedTo[2].itemListElement[4].item.url;
  document.getElementById('c5').innerText=coaches.isRelatedTo[2].itemListElement[5].item.name;
  document.getElementById('c5').href=coaches.isRelatedTo[2].itemListElement[5].item.url;
  document.getElementById('c6').innerText=coaches.isRelatedTo[2].itemListElement[6].item.name;
  document.getElementById('c6').href=coaches.isRelatedTo[2].itemListElement[6].item.url;
  document.getElementById('c7').innerText=coaches.isRelatedTo[2].itemListElement[7].item.name;
  document.getElementById('c7').href=coaches.isRelatedTo[2].itemListElement[7].item.url;
  document.getElementById('c8').innerText=coaches.isRelatedTo[2].itemListElement[8].item.name;
  document.getElementById('c8').href=coaches.isRelatedTo[2].itemListElement[8].item.url;
  document.getElementById('c9').innerText=coaches.isRelatedTo[2].itemListElement[9].item.name;
  document.getElementById('c9').href=coaches.isRelatedTo[2].itemListElement[9].item.url;
  document.getElementById('c10').innerText=coaches.isRelatedTo[2].itemListElement[10].item.name;
  document.getElementById('c10').href=coaches.isRelatedTo[2].itemListElement[10].item.url;
  document.getElementById('c11').innerText=coaches.isRelatedTo[2].itemListElement[11].item.name;
  document.getElementById('c11').href=coaches.isRelatedTo[2].itemListElement[11].item.url;
  document.getElementById('c12').innerText=coaches.isRelatedTo[2].itemListElement[12].item.name;
  document.getElementById('c12').href=coaches.isRelatedTo[2].itemListElement[12].item.url;
  document.getElementById('c13').innerText=coaches.isRelatedTo[2].itemListElement[13].item.name;
  document.getElementById('c13').href=coaches.isRelatedTo[2].itemListElement[13].item.url;
  document.getElementById('c14').innerText=coaches.isRelatedTo[2].itemListElement[14].item.name;
  document.getElementById('c14').href=coaches.isRelatedTo[2].itemListElement[14].item.url;
  document.getElementById('c15').innerText=coaches.isRelatedTo[2].itemListElement[15].item.name;
  document.getElementById('c15').href=coaches.isRelatedTo[2].itemListElement[15].item.url;
  document.getElementById('c16').innerText=coaches.isRelatedTo[2].itemListElement[16].item.name;
  document.getElementById('c16').href=coaches.isRelatedTo[2].itemListElement[16].item.url;
  document.getElementById('c17').innerText=coaches.isRelatedTo[2].itemListElement[17].item.name;
  document.getElementById('c17').href=coaches.isRelatedTo[2].itemListElement[17].item.url;

}

dataCouple();
