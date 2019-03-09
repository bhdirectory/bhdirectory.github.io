function myFunction() {
  var jsonld = JSON.parse(document.querySelector('#datablock1').innerText);
  document.getElementById('test').innerText=jsonld.manufacturer.name;
}

myFunction();
