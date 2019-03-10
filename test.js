/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var title = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementById('title').innerText=title.headline;
  document.getElementById('headerTitle').innerText=title.headline;

  var make = JSON.parse(document.querySelector('#datablock1').innerText);
  document.getElementById('make').innerText=make.manufacturer.name;
  document.getElementById('make').href=make.manufacturer.url;
  document.getElementById('location').innerText=make.location.name;
  document.getElementById('location').href=make.location.url;

  var model = JSON.parse(document.querySelector('#datablock1').innerText);
  document.getElementById('model').innerText=model.model.name;
  document.getElementById('model').href=model.model.url;

  var sn = JSON.parse(document.querySelector('#datablock1').innerText);
  document.getElementById('sn').innerText=sn.serialNumber;

  var handsetMake = JSON.parse(document.querySelector('#datablock2').innerText);
  document.getElementById('handsetMake').innerText=handsetMake.manufacturer.name;

  var handsetModel = JSON.parse(document.querySelector('#datablock2').innerText);
  document.getElementById('handsetModel').innerText=handsetModel.model.name;

}

myFunction();
