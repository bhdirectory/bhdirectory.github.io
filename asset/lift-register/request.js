function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var response = JSON.parse(xhttp.responseText);
    document.getElementById('index').innerText=response.headline;
    }
  };
  xhttp.open("GET", "3001.html", true);
  xhttp.send();
}

loadXMLDoc();
