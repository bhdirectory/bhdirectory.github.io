/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('up0').innerText=coaches.mainEntityOfPage.hasPart[0].datePublished + " - " + coaches.mainEntityOfPage.hasPart[0].text;
  document.getElementById('up1').innerText=coaches.mainEntityOfPage.hasPart[1].datePublished + " - " + coaches.mainEntityOfPage.hasPart[1].text;
  document.getElementById('p0').innerText=coaches.itemListElement[0].item.description;
  document.getElementById('a0').innerText=coaches.itemListElement[0].item.name;
  document.getElementById('a0').href=coaches.itemListElement[0].item.url;
  document.getElementById('p1').innerText=coaches.itemListElement[1].item.description;
  document.getElementById('a1').innerText=coaches.itemListElement[1].item.name;
  document.getElementById('a1').href=coaches.itemListElement[1].item.url;
  document.getElementById('p2').innerText=coaches.itemListElement[2].item.description;
  document.getElementById('a2').innerText=coaches.itemListElement[2].item.name;
  document.getElementById('a2').href=coaches.itemListElement[2].item.url;
  document.getElementById('p3').innerText=coaches.itemListElement[3].item.description;
  document.getElementById('a3').innerText=coaches.itemListElement[3].item.name;
  document.getElementById('a3').href=coaches.itemListElement[3].item.url;
  document.getElementById('p4').innerText=coaches.itemListElement[4].item.description;
  document.getElementById('a4').innerText=coaches.itemListElement[4].item.name;
  document.getElementById('a4').href=coaches.itemListElement[4].item.url;
  document.getElementById('p5').innerText=coaches.itemListElement[5].item.description;
  document.getElementById('a5').innerText=coaches.itemListElement[5].item.name;
  document.getElementById('a5').href=coaches.itemListElement[5].item.url;
  document.getElementById('p6').innerText=coaches.itemListElement[6].item.description;
  document.getElementById('a6').innerText=coaches.itemListElement[6].item.name;
  document.getElementById('a6').href=coaches.itemListElement[6].item.url;
  document.getElementById('p7').innerText=coaches.itemListElement[7].item.description;
  document.getElementById('a7').innerText=coaches.itemListElement[7].item.name;
  document.getElementById('a7').href=coaches.itemListElement[7].item.url;
  document.getElementById('p8').innerText=coaches.itemListElement[8].item.description;
  document.getElementById('a8').innerText=coaches.itemListElement[8].item.name;
  document.getElementById('a8').href=coaches.itemListElement[8].item.url;
  document.getElementById('p9').innerText=coaches.itemListElement[9].item.description;
  document.getElementById('a9').innerText=coaches.itemListElement[9].item.name;
  document.getElementById('a9').href=coaches.itemListElement[9].item.url;
  document.getElementById('p10').innerText=coaches.itemListElement[10].item.description;
  document.getElementById('a10').innerText=coaches.itemListElement[10].item.name;
  document.getElementById('a10').href=coaches.itemListElement[10].item.url;
  document.getElementById('p11').innerText=coaches.itemListElement[11].item.description;
  document.getElementById('a11').innerText=coaches.itemListElement[11].item.name;
  document.getElementById('a11').href=coaches.itemListElement[11].item.url;
  document.getElementById('p12').innerText=coaches.itemListElement[12].item.description;
  document.getElementById('a12').innerText=coaches.itemListElement[12].item.name;
  document.getElementById('a12').href=coaches.itemListElement[12].item.url;
  document.getElementById('p13').innerText=coaches.itemListElement[13].item.description;
  document.getElementById('a13').innerText=coaches.itemListElement[13].item.name;
  document.getElementById('a13').href=coaches.itemListElement[13].item.url;
  document.getElementById('p14').innerText=coaches.itemListElement[14].item.description;
  document.getElementById('a14').innerText=coaches.itemListElement[14].item.name;
  document.getElementById('a14').href=coaches.itemListElement[14].item.url;
  document.getElementById('p15').innerText=coaches.itemListElement[15].item.description;
  document.getElementById('a15').innerText=coaches.itemListElement[15].item.name;
  document.getElementById('a15').href=coaches.itemListElement[15].item.url;
  document.getElementById('p16').innerText=coaches.itemListElement[16].item.description;
  document.getElementById('a16').innerText=coaches.itemListElement[16].item.name;
  document.getElementById('a16').href=coaches.itemListElement[16].item.url;
  document.getElementById('p17').innerText=coaches.itemListElement[17].item.description;
  document.getElementById('a17').innerText=coaches.itemListElement[17].item.name;
  document.getElementById('a17').href=coaches.itemListElement[17].item.url;
  document.getElementById('p18').innerText=coaches.itemListElement[18].item.description;
  document.getElementById('a18').innerText=coaches.itemListElement[18].item.name;
  document.getElementById('a18').href=coaches.itemListElement[18].item.url;
  document.getElementById('p19').innerText=coaches.itemListElement[19].item.description;
  document.getElementById('a19').innerText=coaches.itemListElement[19].item.name;
  document.getElementById('a19').href=coaches.itemListElement[19].item.url;
  document.getElementById('p20').innerText=coaches.itemListElement[20].item.description;
  document.getElementById('a20').innerText=coaches.itemListElement[20].item.name;
  document.getElementById('a20').href=coaches.itemListElement[20].item.url;
  document.getElementById('p21').innerText=coaches.itemListElement[21].item.description;
  document.getElementById('a21').innerText=coaches.itemListElement[21].item.name;
  document.getElementById('a21').href=coaches.itemListElement[21].item.url;
  document.getElementById('p22').innerText=coaches.itemListElement[22].item.description;
  document.getElementById('a22').innerText=coaches.itemListElement[22].item.name;
  document.getElementById('a22').href=coaches.itemListElement[22].item.url;
  document.getElementById('p23').innerText=coaches.itemListElement[23].item.description;
  document.getElementById('a23').innerText=coaches.itemListElement[23].item.name;
  document.getElementById('a23').href=coaches.itemListElement[23].item.url;
  document.getElementById('p24').innerText=coaches.itemListElement[24].item.description;
  document.getElementById('a24').innerText=coaches.itemListElement[24].item.name;
  document.getElementById('a24').href=coaches.itemListElement[24].item.url;
  document.getElementById('p25').innerText=coaches.itemListElement[25].item.description;
  document.getElementById('a25').innerText=coaches.itemListElement[25].item.name;
  document.getElementById('a25').href=coaches.itemListElement[25].item.url;
  document.getElementById('p26').innerText=coaches.itemListElement[26].item.description;
  document.getElementById('a26').innerText=coaches.itemListElement[26].item.name;
  document.getElementById('a26').href=coaches.itemListElement[26].item.url;
  document.getElementById('p27').innerText=coaches.itemListElement[27].item.description;
  document.getElementById('a27').innerText=coaches.itemListElement[27].item.name;
  document.getElementById('a27').href=coaches.itemListElement[27].item.url;
  document.getElementById('p28').innerText=coaches.itemListElement[28].item.description;
  document.getElementById('a28').innerText=coaches.itemListElement[28].item.name;
  document.getElementById('a28').href=coaches.itemListElement[28].item.url;
  document.getElementById('p29').innerText=coaches.itemListElement[29].item.description;
  document.getElementById('a29').innerText=coaches.itemListElement[29].item.name;
  document.getElementById('a29').href=coaches.itemListElement[29].item.url;
  document.getElementById('p30').innerText=coaches.itemListElement[30].item.description;
  document.getElementById('a30').innerText=coaches.itemListElement[30].item.name;
  document.getElementById('a30').href=coaches.itemListElement[30].item.url;
  document.getElementById('p31').innerText=coaches.itemListElement[31].item.description;
  document.getElementById('a31').innerText=coaches.itemListElement[31].item.name;
  document.getElementById('a31').href=coaches.itemListElement[31].item.url;
  document.getElementById('p32').innerText=coaches.itemListElement[32].item.description;
  document.getElementById('a32').innerText=coaches.itemListElement[32].item.name;
  document.getElementById('a32').href=coaches.itemListElement[32].item.url;
  document.getElementById('p33').innerText=coaches.itemListElement[33].item.description;
  document.getElementById('a33').innerText=coaches.itemListElement[33].item.name;
  document.getElementById('a33').href=coaches.itemListElement[33].item.url;
  document.getElementById('p34').innerText=coaches.itemListElement[34].item.description;
  document.getElementById('a34').innerText=coaches.itemListElement[34].item.name;
  document.getElementById('a34').href=coaches.itemListElement[34].item.url;
  document.getElementById('p35').innerText=coaches.itemListElement[35].item.description;
  document.getElementById('a35').innerText=coaches.itemListElement[35].item.name;
  document.getElementById('a35').href=coaches.itemListElement[35].item.url;
  document.getElementById('p36').innerText=coaches.itemListElement[36].item.description;
  document.getElementById('a36').innerText=coaches.itemListElement[36].item.name;
  document.getElementById('a36').href=coaches.itemListElement[36].item.url;
  document.getElementById('p37').innerText=coaches.itemListElement[37].item.description;
  document.getElementById('a37').innerText=coaches.itemListElement[37].item.name;
  document.getElementById('a37').href=coaches.itemListElement[37].item.url;
  document.getElementById('p38').innerText=coaches.itemListElement[38].item.description;
  document.getElementById('a38').innerText=coaches.itemListElement[38].item.name;
  document.getElementById('a38').href=coaches.itemListElement[38].item.url;
  document.getElementById('p39').innerText=coaches.itemListElement[39].item.description;
  document.getElementById('a39').innerText=coaches.itemListElement[39].item.name;
  document.getElementById('a39').href=coaches.itemListElement[39].item.url;
  document.getElementById('p40').innerText=coaches.itemListElement[40].item.description;
  document.getElementById('a40').innerText=coaches.itemListElement[40].item.name;
  document.getElementById('a40').href=coaches.itemListElement[40].item.url;
  document.getElementById('p41').innerText=coaches.itemListElement[41].item.description;
  document.getElementById('a41').innerText=coaches.itemListElement[41].item.name;
  document.getElementById('a41').href=coaches.itemListElement[41].item.url;
  document.getElementById('p42').innerText=coaches.itemListElement[42].item.description;
  document.getElementById('a42').innerText=coaches.itemListElement[42].item.name;
  document.getElementById('a42').href=coaches.itemListElement[42].item.url;
  document.getElementById('p43').innerText=coaches.itemListElement[43].item.description;
  document.getElementById('a43').innerText=coaches.itemListElement[43].item.name;
  document.getElementById('a43').href=coaches.itemListElement[43].item.url;
  document.getElementById('p44').innerText=coaches.itemListElement[44].item.description;
  document.getElementById('a44').innerText=coaches.itemListElement[44].item.name;
  document.getElementById('a44').href=coaches.itemListElement[44].item.url;
  document.getElementById('p45').innerText=coaches.itemListElement[45].item.description;
  document.getElementById('a45').innerText=coaches.itemListElement[45].item.name;
  document.getElementById('a45').href=coaches.itemListElement[45].item.url;
  document.getElementById('p46').innerText=coaches.itemListElement[46].item.description;
  document.getElementById('a46').innerText=coaches.itemListElement[46].item.name;
  document.getElementById('a46').href=coaches.itemListElement[46].item.url;
  document.getElementById('p47').innerText=coaches.itemListElement[47].item.description;
  document.getElementById('a47').innerText=coaches.itemListElement[47].item.name;
  document.getElementById('a47').href=coaches.itemListElement[47].item.url;
  document.getElementById('p48').innerText=coaches.itemListElement[48].item.description;
  document.getElementById('a48').innerText=coaches.itemListElement[48].item.name;
  document.getElementById('a48').href=coaches.itemListElement[48].item.url;
  document.getElementById('p49').innerText=coaches.itemListElement[49].item.description;
  document.getElementById('a49').innerText=coaches.itemListElement[49].item.name;
  document.getElementById('a49').href=coaches.itemListElement[49].item.url;
  document.getElementById('p50').innerText=coaches.itemListElement[50].item.description;
  document.getElementById('a50').innerText=coaches.itemListElement[50].item.name;
  document.getElementById('a50').href=coaches.itemListElement[50].item.url;
}

dataCouple();
