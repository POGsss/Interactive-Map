var hamburger = document.querySelector(".hamburger");
var ul = document.querySelector("ul");
var philippines = document.getElementById("phil");
var luzon = document.getElementById("lzn");
var visayas = document.getElementById("vsys");
var mindanao = document.getElementById("mndn");
var filter = document.getElementById("filter");
var map = document.getElementById("map");

hamburger.addEventListener("click", function () {
  ul.classList.toggle("show");
});

philippines.addEventListener("click", function () {
  ul.classList.toggle("show");
  map.src = "Assets/Pilipinas.png";
});

luzon.addEventListener("click", function () {
  ul.classList.toggle("show");
  map.src = "Assets/Luzon.png";
});

visayas.addEventListener("click", function () {
  ul.classList.toggle("show");
  map.src = "Assets/Visayas.png";
});

mindanao.addEventListener("click", function () {
  ul.classList.toggle("show");
  map.src = "Assets/Mindanao.png";
});

filter.addEventListener("click", function () {
  map.src = "Assets/Original.png";
});
