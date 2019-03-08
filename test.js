function myFunction() {
  var x = document.getElementsByTagName('TITLE');
  document.getElementById("test").innerHTML = x[0].innerHTML;
}

myFunction();
