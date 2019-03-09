/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var headline = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementByTagName('title')[0].innerText=headline.headline;
}

myFunction();
