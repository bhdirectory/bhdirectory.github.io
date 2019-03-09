/*
- - - get data from json-ld and set in HTML - - -
*/

function myFunction() {
  var headline = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementById('title', 'headerTitle').innerText=headline.headline;
}

myFunction();
