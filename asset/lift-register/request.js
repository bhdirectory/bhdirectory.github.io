function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var coachThree = JSON.parse(document.querySelector('#coachThree').innerText);
    document.getElementById('index').innerText=coachThree.headline.responseText;
    }
  };
  xhttp.open("GET", "3001.html", true);
  xhttp.send();
}

loadXMLDoc();
