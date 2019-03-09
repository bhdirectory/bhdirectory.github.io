/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var headline = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementByClassName('title').innerText=headline.headline;
}

myFunction();
