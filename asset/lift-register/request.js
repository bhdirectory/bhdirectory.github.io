function loadXMLDoc() {
  var coachOne = JSON.parse(document.querySelector('#coachOne').innerText);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('index').innerText=coachOne.manufacturer.name;
    }
  };
  xhttp.open("GET", "3001.html", true);
  xhttp.send();
}

loadXMLDoc();
