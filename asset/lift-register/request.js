function loadXMLDoc() {
  var coachThree = JSON.parse(document.querySelector('#coachThree').innerText);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('index').innerText=coachThree.headline;
    }
  };
  xhttp.open("GET", "3001.html", true);
  xhttp.send();
}

loadXMLDoc();
