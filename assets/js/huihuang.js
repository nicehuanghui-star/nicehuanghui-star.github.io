"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("print-cv");
  if (button) button.addEventListener("click", function () { window.print(); });
});
