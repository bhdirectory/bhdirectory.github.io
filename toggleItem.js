/*
- - - toggle div in toggle-item id - - -
*/

function toggleFunction() {
  var x = document.getElementById("toggle-item");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

toggleFunction();
