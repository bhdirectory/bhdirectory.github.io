function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById('index').innerText=xhttp.responseText;
    }
  };
  xhttp.open("GET", "3001.html", true);
  xhttp.send();
}

loadXMLDoc();
