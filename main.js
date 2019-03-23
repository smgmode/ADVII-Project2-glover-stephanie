//extra paragraph
var first = document.getElementById ("firstbutton"),
    epara = document.getElementById ("extrapara");
 firstbutton.addEventListener("click", function (event) {
  event.preventDefault ();
  epara.style.display = (epara.style.display === "none") ? "block" :
  "none";
}, false);
  epara.style.display = "none";
