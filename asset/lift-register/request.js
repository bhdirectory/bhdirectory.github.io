function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('index').innerText=this.responseText;
    }
  };
  xhttp.open("GET", "3001.html#coachThree", true);
  xhttp.send();
}

loadXMLDoc();
