function myFunction() {
  var jsonld = JSON.parse(document.querySelector('#datablock3').innerText);
  document.getElementById('test').innerText=jsonld.headline;
}

myFunction();
