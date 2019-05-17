/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('up0').innerText=coaches.mainEntityOfPage.hasPart[0].datePublished + " - " + coaches.mainEntityOfPage.hasPart[0].text;
  document.getElementById('up1').innerText=coaches.mainEntityOfPage.hasPart[1].datePublished + " - " + coaches.mainEntityOfPage.hasPart[1].text;
  document.getElementById('up2').innerText=coaches.mainEntityOfPage.hasPart[2].datePublished + " - " + coaches.mainEntityOfPage.hasPart[2].text;
}

dataCouple();
