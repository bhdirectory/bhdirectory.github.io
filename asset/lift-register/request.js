function loadXMLDoc() {
  var coachThree = JSON.parse(document.querySelector('#coachThree').innerText);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('index').innerText=coachThree.headline;
    }
  };
  xhttp.open("GET", "https://bhdirectory.github.io/asset/lift-register/3001.html", true);
  xhttp.send();
}

loadXMLDoc();
