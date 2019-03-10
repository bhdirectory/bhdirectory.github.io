/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var dbthree = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementById('title').innerText=dbthree.headline;
  document.getElementById('headerTitle').innerText=dbthree.headline;

  var dbone = JSON.parse(document.querySelector('#datablock1').innerText);
  document.getElementById('make').innerText=dbone.manufacturer.name;
  document.getElementById('make').href=dbone.manufacturer.url;
  document.getElementById('model').innerText=dbone.model.name;
  document.getElementById('model').href=dbone.model.url;
  document.getElementById('sn').innerText=dbone.serialNumber;
  document.getElementById('location').innerText=dbone.location.name;
  document.getElementById('location').href=dbone.location.url;
  document.getElementById('condition').innerText=dbone.itemCondition;
  document.getElementById('mailtoPass').href="mailto:maintenance@birtleyhouse.co.uk?subject=Bed%20Check%20PASS%20" + dbone.identifier.value + "&body=No%20action%20required";
  document.getElementById('mailtoFail').href="mailto:maintenance@birtleyhouse.co.uk?subject=Bed%20Check%20FAIL%20" + dbone.identifier.value + "&body=Reason%20for%20failure:&20";

  var dbtwo = JSON.parse(document.querySelector('#datablock2').innerText);
  document.getElementById('handsetMake').innerText=dbtwo.manufacturer.name;
  document.getElementById('handsetModel').innerText=dbtwo.model.name;
  document.getElementById('handsetCondition').innerText=dbtwo.itemCondition;

}

myFunction();
