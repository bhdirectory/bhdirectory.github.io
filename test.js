function myFunction() {
  var jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
  document.getElementById('test').innerText=jsonld.headline;
}

myFunction();
