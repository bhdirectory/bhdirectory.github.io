function myFunction() {
  var x = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
  document.getElementById('test').innerText=json.headline;
}

myFunction();
