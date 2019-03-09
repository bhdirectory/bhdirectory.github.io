function myFunction() {
  var jsonld = JSON.parse(document.querySelectorAll('script[type="application/ld+json"]').innerText);
  document.getElementById('test').innerText=jsonld.headline;
}

myFunction();
