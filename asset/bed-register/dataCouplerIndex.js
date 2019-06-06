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
  document.getElementById('a0').innerText=coaches.itemListElement[0].item[0].name;
  document.getElementById('a0').href=coaches.itemListElement[0].item[0].url;
  document.getElementById('m0').innerText=coaches.itemListElement[0].item[1].name;
  document.getElementById('m0').href=coaches.itemListElement[0].item[1].url;
  document.getElementById('p1').innerText=coaches.itemListElement[1].position;
  document.getElementById('a1').innerText=coaches.itemListElement[1].item[0].name;
  document.getElementById('a1').href=coaches.itemListElement[1].item[0].url;
  document.getElementById('m1').innerText=coaches.itemListElement[1].item[1].name;
  document.getElementById('m1').href=coaches.itemListElement[1].item[1].url;
  document.getElementById('p2').innerText=coaches.itemListElement[2].position;
  document.getElementById('a2').innerText=coaches.itemListElement[2].item[0].name;
  document.getElementById('a2').href=coaches.itemListElement[2].item[0].url;
  document.getElementById('m2').innerText=coaches.itemListElement[2].item[1].name;
  document.getElementById('m2').href=coaches.itemListElement[2].item[1].url;
  document.getElementById('p3').innerText=coaches.itemListElement[3].position;
  document.getElementById('a3').innerText=coaches.itemListElement[3].item[0].name;
  document.getElementById('a3').href=coaches.itemListElement[3].item[0].url;
  document.getElementById('m3').innerText=coaches.itemListElement[3].item[1].name;
  document.getElementById('m3').href=coaches.itemListElement[3].item[1].url;
  document.getElementById('p4').innerText=coaches.itemListElement[4].position;
  document.getElementById('a4').innerText=coaches.itemListElement[4].item[0].name;
  document.getElementById('a4').href=coaches.itemListElement[4].item[0].url;
  document.getElementById('m4').innerText=coaches.itemListElement[4].item[1].name;
  document.getElementById('m4').href=coaches.itemListElement[4].item[1].url;
  document.getElementById('p5').innerText=coaches.itemListElement[5].position;
  document.getElementById('a5').innerText=coaches.itemListElement[5].item[0].name;
  document.getElementById('a5').href=coaches.itemListElement[5].item[0].url;
  document.getElementById('m5').innerText=coaches.itemListElement[5].item[1].name;
  document.getElementById('m5').href=coaches.itemListElement[5].item[1].url;
  document.getElementById('p6').innerText=coaches.itemListElement[6].position;
  document.getElementById('a6').innerText=coaches.itemListElement[6].item[0].name;
  document.getElementById('a6').href=coaches.itemListElement[6].item[0].url;
  document.getElementById('m6').innerText=coaches.itemListElement[6].item[1].name;
  document.getElementById('m6').href=coaches.itemListElement[6].item[1].url;
  document.getElementById('p7').innerText=coaches.itemListElement[7].position;
  document.getElementById('a7').innerText=coaches.itemListElement[7].item[0].name;
  document.getElementById('a7').href=coaches.itemListElement[7].item[0].url;
  document.getElementById('m7').innerText=coaches.itemListElement[7].item[1].name;
  document.getElementById('m7').href=coaches.itemListElement[7].item[1].url;
  document.getElementById('p8').innerText=coaches.itemListElement[8].position;
  document.getElementById('a8').innerText=coaches.itemListElement[8].item[0].name;
  document.getElementById('a8').href=coaches.itemListElement[8].item[0].url;
  document.getElementById('m8').innerText=coaches.itemListElement[8].item[1].name;
  document.getElementById('m8').href=coaches.itemListElement[8].item[1].url;
  document.getElementById('p9').innerText=coaches.itemListElement[9].position;
  document.getElementById('a9').innerText=coaches.itemListElement[9].item[0].name;
  document.getElementById('a9').href=coaches.itemListElement[9].item[0].url;
  document.getElementById('m9').innerText=coaches.itemListElement[9].item[1].name;
  document.getElementById('m9').href=coaches.itemListElement[9].item[1].url;
  document.getElementById('p10').innerText=coaches.itemListElement[10].position;
  document.getElementById('a10').innerText=coaches.itemListElement[10].item[0].name;
  document.getElementById('a10').href=coaches.itemListElement[10].item[0].url;
  document.getElementById('m10').innerText=coaches.itemListElement[10].item[1].name;
  document.getElementById('m10').href=coaches.itemListElement[10].item[1].url;
  document.getElementById('p11').innerText=coaches.itemListElement[11].position;
  document.getElementById('a11').innerText=coaches.itemListElement[11].item[0].name;
  document.getElementById('a11').href=coaches.itemListElement[11].item[0].url;
  document.getElementById('m11').innerText=coaches.itemListElement[11].item[1].name;
  document.getElementById('m11').href=coaches.itemListElement[11].item[1].url;
  document.getElementById('p12').innerText=coaches.itemListElement[12].position;
  document.getElementById('a12').innerText=coaches.itemListElement[12].item[0].name;
  document.getElementById('a12').href=coaches.itemListElement[12].item[0].url;
  document.getElementById('m12').innerText=coaches.itemListElement[12].item[1].name;
  document.getElementById('m12').href=coaches.itemListElement[12].item[1].url;
  document.getElementById('p13').innerText=coaches.itemListElement[13].position;
  document.getElementById('a13').innerText=coaches.itemListElement[13].item[0].name;
  document.getElementById('a13').href=coaches.itemListElement[13].item[0].url;
  document.getElementById('m13').innerText=coaches.itemListElement[13].item[1].name;
  document.getElementById('m13').href=coaches.itemListElement[13].item[1].url;
  document.getElementById('p14').innerText=coaches.itemListElement[14].position;
  document.getElementById('a14').innerText=coaches.itemListElement[14].item[0].name;
  document.getElementById('a14').href=coaches.itemListElement[14].item[0].url;
  document.getElementById('m14').innerText=coaches.itemListElement[14].item[1].name;
  document.getElementById('m14').href=coaches.itemListElement[14].item[1].url;
  document.getElementById('p15').innerText=coaches.itemListElement[15].position;
  document.getElementById('a15').innerText=coaches.itemListElement[15].item[0].name;
  document.getElementById('a15').href=coaches.itemListElement[15].item[0].url;
  document.getElementById('m15').innerText=coaches.itemListElement[15].item[1].name;
  document.getElementById('m15').href=coaches.itemListElement[15].item[1].url;
  document.getElementById('p16').innerText=coaches.itemListElement[16].position;
  document.getElementById('a16').innerText=coaches.itemListElement[16].item[0].name;
  document.getElementById('a16').href=coaches.itemListElement[16].item[0].url;
  document.getElementById('m16').innerText=coaches.itemListElement[16].item[1].name;
  document.getElementById('m16').href=coaches.itemListElement[16].item[1].url;
  document.getElementById('p17').innerText=coaches.itemListElement[17].position;
  document.getElementById('a17').innerText=coaches.itemListElement[17].item[0].name;
  document.getElementById('a17').href=coaches.itemListElement[17].item[0].url;
  document.getElementById('m17').innerText=coaches.itemListElement[17].item[1].name;
  document.getElementById('m17').href=coaches.itemListElement[17].item[1].url;
  document.getElementById('p18').innerText=coaches.itemListElement[18].position;
  document.getElementById('a18').innerText=coaches.itemListElement[18].item[0].name;
  document.getElementById('a18').href=coaches.itemListElement[18].item[0].url;
  document.getElementById('m18').innerText=coaches.itemListElement[18].item[1].name;
  document.getElementById('m18').href=coaches.itemListElement[18].item[1].url;
  document.getElementById('p19').innerText=coaches.itemListElement[19].position;
  document.getElementById('a19').innerText=coaches.itemListElement[19].item[0].name;
  document.getElementById('a19').href=coaches.itemListElement[19].item[0].url;
  document.getElementById('m19').innerText=coaches.itemListElement[19].item[1].name;
  document.getElementById('m19').href=coaches.itemListElement[19].item[1].url;
  document.getElementById('p20').innerText=coaches.itemListElement[20].position;
  document.getElementById('a20').innerText=coaches.itemListElement[20].item[0].name;
  document.getElementById('a20').href=coaches.itemListElement[20].item[0].url;
  document.getElementById('m20').innerText=coaches.itemListElement[20].item[1].name;
  document.getElementById('m20').href=coaches.itemListElement[20].item[1].url;
  document.getElementById('p21').innerText=coaches.itemListElement[21].position;
  document.getElementById('a21').innerText=coaches.itemListElement[21].item[0].name;
  document.getElementById('a21').href=coaches.itemListElement[21].item[0].url;
  document.getElementById('m21').innerText=coaches.itemListElement[21].item[1].name;
  document.getElementById('m21').href=coaches.itemListElement[21].item[1].url;
  document.getElementById('p22').innerText=coaches.itemListElement[22].position;
  document.getElementById('a22').innerText=coaches.itemListElement[22].item[0].name;
  document.getElementById('a22').href=coaches.itemListElement[22].item[0].url;
  document.getElementById('m22').innerText=coaches.itemListElement[22].item[1].name;
  document.getElementById('m22').href=coaches.itemListElement[22].item[1].url;
  document.getElementById('p23').innerText=coaches.itemListElement[23].position;
  document.getElementById('a23').innerText=coaches.itemListElement[23].item[0].name;
  document.getElementById('a23').href=coaches.itemListElement[23].item[0].url;
  document.getElementById('m23').innerText=coaches.itemListElement[23].item[1].name;
  document.getElementById('m23').href=coaches.itemListElement[23].item[1].url;
  document.getElementById('p24').innerText=coaches.itemListElement[24].position;
  document.getElementById('a24').innerText=coaches.itemListElement[24].item[0].name;
  document.getElementById('a24').href=coaches.itemListElement[24].item[0].url;
  document.getElementById('m24').innerText=coaches.itemListElement[24].item[1].name;
  document.getElementById('m24').href=coaches.itemListElement[24].item[1].url;
  document.getElementById('p25').innerText=coaches.itemListElement[25].position;
  document.getElementById('a25').innerText=coaches.itemListElement[25].item[0].name;
  document.getElementById('a25').href=coaches.itemListElement[25].item[0].url;
  document.getElementById('m25').innerText=coaches.itemListElement[25].item[1].name;
  document.getElementById('m25').href=coaches.itemListElement[25].item[1].url;
  document.getElementById('p26').innerText=coaches.itemListElement[26].position;
  document.getElementById('a26').innerText=coaches.itemListElement[26].item[0].name;
  document.getElementById('a26').href=coaches.itemListElement[26].item[0].url;
  document.getElementById('m26').innerText=coaches.itemListElement[26].item[1].name;
  document.getElementById('m26').href=coaches.itemListElement[26].item[1].url;
  document.getElementById('p27').innerText=coaches.itemListElement[27].position;
  document.getElementById('a27').innerText=coaches.itemListElement[27].item[0].name;
  document.getElementById('a27').href=coaches.itemListElement[27].item[0].url;
  document.getElementById('m27').innerText=coaches.itemListElement[27].item[1].name;
  document.getElementById('m27').href=coaches.itemListElement[27].item[1].url;
  document.getElementById('p28').innerText=coaches.itemListElement[28].position;
  document.getElementById('a28').innerText=coaches.itemListElement[28].item[0].name;
  document.getElementById('a28').href=coaches.itemListElement[28].item[0].url;
  document.getElementById('m28').innerText=coaches.itemListElement[28].item[1].name;
  document.getElementById('m28').href=coaches.itemListElement[28].item[1].url;
  document.getElementById('p29').innerText=coaches.itemListElement[29].position;
  document.getElementById('a29').innerText=coaches.itemListElement[29].item[0].name;
  document.getElementById('a29').href=coaches.itemListElement[29].item[0].url;
  document.getElementById('m29').innerText=coaches.itemListElement[29].item[1].name;
  document.getElementById('m29').href=coaches.itemListElement[29].item[1].url;
  document.getElementById('p30').innerText=coaches.itemListElement[30].position;
  document.getElementById('a30').innerText=coaches.itemListElement[30].item[0].name;
  document.getElementById('a30').href=coaches.itemListElement[30].item[0].url;
  document.getElementById('m30').innerText=coaches.itemListElement[30].item[1].name;
  document.getElementById('m30').href=coaches.itemListElement[30].item[1].url;
  document.getElementById('p31').innerText=coaches.itemListElement[31].position;
  document.getElementById('a31').innerText=coaches.itemListElement[31].item[0].name;
  document.getElementById('a31').href=coaches.itemListElement[31].item[0].url;
  document.getElementById('m31').innerText=coaches.itemListElement[31].item[1].name;
  document.getElementById('m31').href=coaches.itemListElement[31].item[1].url;
  document.getElementById('p32').innerText=coaches.itemListElement[32].position;
  document.getElementById('a32').innerText=coaches.itemListElement[32].item[0].name;
  document.getElementById('a32').href=coaches.itemListElement[32].item[0].url;
  document.getElementById('m32').innerText=coaches.itemListElement[32].item[1].name;
  document.getElementById('m32').href=coaches.itemListElement[32].item[1].url;
  document.getElementById('p33').innerText=coaches.itemListElement[33].position;
  document.getElementById('a33').innerText=coaches.itemListElement[33].item[0].name;
  document.getElementById('a33').href=coaches.itemListElement[33].item[0].url;
  document.getElementById('m33').innerText=coaches.itemListElement[33].item[1].name;
  document.getElementById('m33').href=coaches.itemListElement[33].item[1].url;
  document.getElementById('p34').innerText=coaches.itemListElement[34].position;
  document.getElementById('a34').innerText=coaches.itemListElement[34].item[0].name;
  document.getElementById('a34').href=coaches.itemListElement[34].item[0].url;
  document.getElementById('m34').innerText=coaches.itemListElement[34].item[1].name;
  document.getElementById('m34').href=coaches.itemListElement[34].item[1].url;
  document.getElementById('p35').innerText=coaches.itemListElement[35].position;
  document.getElementById('a35').innerText=coaches.itemListElement[35].item[0].name;
  document.getElementById('a35').href=coaches.itemListElement[35].item[0].url;
  document.getElementById('m35').innerText=coaches.itemListElement[35].item[1].name;
  document.getElementById('m35').href=coaches.itemListElement[35].item[1].url;
  document.getElementById('p36').innerText=coaches.itemListElement[36].position;
  document.getElementById('a36').innerText=coaches.itemListElement[36].item[0].name;
  document.getElementById('a36').href=coaches.itemListElement[36].item[0].url;
  document.getElementById('m36').innerText=coaches.itemListElement[36].item[1].name;
  document.getElementById('m36').href=coaches.itemListElement[36].item[1].url;
  document.getElementById('p37').innerText=coaches.itemListElement[37].position;
  document.getElementById('a37').innerText=coaches.itemListElement[37].item[0].name;
  document.getElementById('a37').href=coaches.itemListElement[37].item[0].url;
  document.getElementById('m37').innerText=coaches.itemListElement[37].item[1].name;
  document.getElementById('m37').href=coaches.itemListElement[37].item[1].url;
  document.getElementById('p38').innerText=coaches.itemListElement[38].position;
  document.getElementById('a38').innerText=coaches.itemListElement[38].item[0].name;
  document.getElementById('a38').href=coaches.itemListElement[38].item[0].url;
  document.getElementById('m38').innerText=coaches.itemListElement[38].item[1].name;
  document.getElementById('m38').href=coaches.itemListElement[38].item[1].url;
  document.getElementById('p39').innerText=coaches.itemListElement[39].position;
  document.getElementById('a39').innerText=coaches.itemListElement[39].item[0].name;
  document.getElementById('a39').href=coaches.itemListElement[39].item[0].url;
  document.getElementById('m39').innerText=coaches.itemListElement[39].item[1].name;
  document.getElementById('m39').href=coaches.itemListElement[39].item[1].url;
  document.getElementById('p40').innerText=coaches.itemListElement[40].position;
  document.getElementById('a40').innerText=coaches.itemListElement[40].item[0].name;
  document.getElementById('a40').href=coaches.itemListElement[40].item[0].url;
  document.getElementById('m40').innerText=coaches.itemListElement[40].item[1].name;
  document.getElementById('m40').href=coaches.itemListElement[40].item[1].url;
  document.getElementById('p41').innerText=coaches.itemListElement[41].position;
  document.getElementById('a41').innerText=coaches.itemListElement[41].item[0].name;
  document.getElementById('a41').href=coaches.itemListElement[41].item[0].url;
  document.getElementById('m41').innerText=coaches.itemListElement[41].item[1].name;
  document.getElementById('m41').href=coaches.itemListElement[41].item[1].url;
  document.getElementById('p42').innerText=coaches.itemListElement[42].position;
  document.getElementById('a42').innerText=coaches.itemListElement[42].item[0].name;
  document.getElementById('a42').href=coaches.itemListElement[42].item[0].url;
  document.getElementById('m42').innerText=coaches.itemListElement[42].item[1].name;
  document.getElementById('m42').href=coaches.itemListElement[42].item[1].url;
  document.getElementById('p43').innerText=coaches.itemListElement[43].position;
  document.getElementById('a43').innerText=coaches.itemListElement[43].item[0].name;
  document.getElementById('a43').href=coaches.itemListElement[43].item[0].url;
  document.getElementById('m43').innerText=coaches.itemListElement[43].item[1].name;
  document.getElementById('m43').href=coaches.itemListElement[43].item[1].url;
  document.getElementById('p44').innerText=coaches.itemListElement[44].position;
  document.getElementById('a44').innerText=coaches.itemListElement[44].item[0].name;
  document.getElementById('a44').href=coaches.itemListElement[44].item[0].url;
  document.getElementById('m44').innerText=coaches.itemListElement[44].item[1].name;
  document.getElementById('m44').href=coaches.itemListElement[44].item[1].url;
  document.getElementById('p45').innerText=coaches.itemListElement[45].position;
  document.getElementById('a45').innerText=coaches.itemListElement[45].item[0].name;
  document.getElementById('a45').href=coaches.itemListElement[45].item[0].url;
  document.getElementById('m45').innerText=coaches.itemListElement[45].item[1].name;
  document.getElementById('m45').href=coaches.itemListElement[45].item[1].url;
  document.getElementById('p46').innerText=coaches.itemListElement[46].position;
  document.getElementById('a46').innerText=coaches.itemListElement[46].item[0].name;
  document.getElementById('a46').href=coaches.itemListElement[46].item[0].url;
  document.getElementById('m46').innerText=coaches.itemListElement[46].item[1].name;
  document.getElementById('m46').href=coaches.itemListElement[46].item[1].url;
  document.getElementById('p47').innerText=coaches.itemListElement[47].position;
  document.getElementById('a47').innerText=coaches.itemListElement[47].item[0].name;
  document.getElementById('a47').href=coaches.itemListElement[47].item[0].url;
  document.getElementById('m47').innerText=coaches.itemListElement[47].item[1].name;
  document.getElementById('m47').href=coaches.itemListElement[47].item[1].url;
  document.getElementById('p48').innerText=coaches.itemListElement[48].position;
  document.getElementById('a48').innerText=coaches.itemListElement[48].item[0].name;
  document.getElementById('a48').href=coaches.itemListElement[48].item[0].url;
  document.getElementById('m48').innerText=coaches.itemListElement[48].item[1].name;
  document.getElementById('m48').href=coaches.itemListElement[48].item[1].url;
  document.getElementById('p49').innerText=coaches.itemListElement[49].position;
  document.getElementById('a49').innerText=coaches.itemListElement[49].item[0].name;
  document.getElementById('a49').href=coaches.itemListElement[49].item[0].url;
  document.getElementById('m49').innerText=coaches.itemListElement[49].item[1].name;
  document.getElementById('m49').href=coaches.itemListElement[49].item[1].url;
  document.getElementById('p50').innerText=coaches.itemListElement[50].position;
  document.getElementById('a50').innerText=coaches.itemListElement[50].item[0].name;
  document.getElementById('a50').href=coaches.itemListElement[50].item[0].url;
  document.getElementById('m50').innerText=coaches.itemListElement[50].item[1].name;
  document.getElementById('m50').href=coaches.itemListElement[50].item[1].url;
}

dataCouple();
