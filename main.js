//extra paragraph first button
var first = document.getElementById ("firstbutton"),
    epara = document.getElementById ("extrapara");
 firstbutton.addEventListener("click", function (event) {
  event.preventDefault ();
  epara.style.display = (epara.style.display === "none") ? "block" :
  "none";
}, false);
  epara.style.display = "none";

  //extra paragraph second button
  var second = document.getElementById ("secondbutton"),
      eparaII = document.getElementById ("extraparaII");
   secondbutton.addEventListener("click", function (event) {
    event.preventDefault ();
    eparaII.style.display = (eparaII.style.display === "none") ? "block" :
    "none";
  }, false);
    eparaII.style.display = "none";

    //extra paragraph third button
    var third = document.getElementById ("thirdbutton"),
        eparaIII = document.getElementById ("extraparaIII");
     thirdbutton.addEventListener("click", function (event) {
      event.preventDefault ();
      eparaIII.style.display = (eparaIII.style.display === "none") ? "block" :
      "none";
    }, false);
      eparaIII.style.display = "none";
