/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var title = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementById('title').innerText=title.headline;
  document.getElementById('headerTitle').innerText=title.headline;

  var make = JSON.parse(document.querySelector('#datablock1').innerText);
  document.getElementById('make').innerText=make.manufacturer.name;
  
}

myFunction();
