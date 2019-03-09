/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var title = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementByClassName('title')[0].innerText=title.headline;
}

myFunction();
