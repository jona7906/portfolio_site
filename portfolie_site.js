"use strict";
window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("images/background-01.svg")
    .then((response) => response.text())
    .then((svgData) => {
      console.log("SVG loaded");
      document.querySelector("#background_svg").innerHTML = svgData;
      // TODO: put the SVG into the DOM
      // TODO: Start the animation
      changeIdOnPaths(svgData);
      editSVG();
    });
}

function changeIdOnPaths(svg) {
  let i = 1;
  console.log("changing ids and path data names");
  document.querySelectorAll("path").forEach((element) => {
    element.id = "curtain_" + i;
    element.dataset.name = "path_" + i;
    i++;
    console.log(element);
  });
}

function editSVG() {
  console.log("editing svg");

  addShadowsToPaths();
}

function addShadowsToPaths() {
  document.querySelectorAll("path").forEach((element) => {
    if (element.id === "curtain_2" || element.id == "curtain_4" || element.id == "curtain_5") {
      element.style.filter = "drop-shadow( 20px 10px 10px rgba(0, 0, 0, .21))";
    } else {
      element.style.filter = "drop-shadow( -20px 10px 10px rgba(0, 0, 0, .21))";
    }
  });
}

/* runBackgroundAnimation();
function runBackgroundAnimation() {
  console.log("running background animation");
} */
