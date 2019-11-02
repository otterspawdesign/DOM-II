// Your code goes here

// Make "Fun Bus" text bigger on mouseover
const funBusText = document.querySelector(".logo-heading");
funBusText.addEventListener("mouseover", event => {
  funBusText.style.fontSize = "6rem";
});

// Give an alert when the page loads
const hello = document.querySelector("body");
window.addEventListener("load", event => {
  alert("Hi, Welcome to Fun Bus!");
});

// Turn background blue on scroll
document.addEventListener("scroll", event => {
  document.querySelector("body").style.backgroundColor = "skyblue";
  event.stopPropagation();
});

// Don't copy me
document.addEventListener("copy", event => {
  alert("Copying is not permitted on this page.");
});

// Turn header pink
const colorHeader = document.querySelector("header");
colorHeader.addEventListener("mouseenter", event => {
  colorHeader.style.backgroundColor = "lightcoral";
});

//Turn header back to white
const originalHeader = document.querySelector("header");
originalHeader.addEventListener("mouseleave", event => {
  originalHeader.style.backgroundColor = "white";
});

// Change the little bus pic
const changeBus = document.querySelector(".intro img");
changeBus.addEventListener("click", event => {
  event.stopPropagation();
  changeBus.setAttribute("src", "../img/busPeople.jpg");
});

// Change it back to the little bus
const changeBack = document.querySelector(".intro img");
changeBack.addEventListener("dblclick", event => {
  event.stopPropagation();
  changeBack.setAttribute("src", "../img/fun-bus.jpg");
});

// Alert when keyboard key is pushed
window.addEventListener("keydown", event => {
  alert("You pressed a key on your keyboard.  What are you trying to do?");
});

// Make pics bigger and smaller with transition
const scaleUp = document.querySelectorAll(".img-content");
scaleUp.forEach(item => {
  item.addEventListener("mouseenter", event => {
    item.style.transform = "scale(1.3)";
    item.style.transition = " transform 0.5s";
  });
});
const scaleDown = document.querySelectorAll(".img-content");
scaleDown.forEach(item => {
  item.addEventListener("mouseleave", event => {
    item.style.transform = "scale(1)";
    item.style.transition = "transform 0.5s";
  });
});

