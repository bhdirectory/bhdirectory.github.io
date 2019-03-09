/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var headline = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementByTagName('TITLE').innerText=headline.headline;
}

myFunction();
