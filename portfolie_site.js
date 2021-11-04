"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  /* loadSVG(); */
  loadSection();
  /* hideNavOnScroll(); */
}

function loadSection() {
  document.querySelectorAll("object").forEach((object) => {
    console.log(object.className);
    loadSVG(object.className);
  });
}

function loadSVG(svgId) {
  console.log("loading " + svgId);
  fetch(`assets/${svgId}.svg`)
    .then((response) => response.text())
    .then((svgData) => {
      console.log("SVG loaded");
      document.querySelectorAll(`.${svgId}`).forEach((svg) => {
        svg.innerHTML = svgData;
      });
    });
}

/* 
function hideNavOnScroll() {
  let lastKnownScrollPosition = 0;
  let newScrollPosition = 0;

  document.addEventListener("scroll", function (e) {
    lastKnownScrollPosition = newScrollPosition;
    newScrollPosition = window.scrollY;

    if (lastKnownScrollPosition > newScrollPosition) {
      console.log("scrolling up");
      document.querySelector("header").style.opacity = "0";
    }
    if (lastKnownScrollPosition < newScrollPosition) {
      console.log("scrolling down");
      document.querySelector("header").style.opacity = "100";
    }
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
