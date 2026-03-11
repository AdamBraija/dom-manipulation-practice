const button = document.getElementById("btn");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const navbar = document.querySelector(".navbar");
const heading = content.querySelector("h1");
let isLightMode = false;
button.addEventListener("click", () => {
  isLightMode = !isLightMode;
  container.style.color = isLightMode ? "#222" : "#fff";
  container.style.backgroundColor = isLightMode ? "#f0f0f0" : "#333";
  content.style.backgroundColor = isLightMode ? "#fff" : "#444";
  content.style.color = isLightMode ? "#222" : "#fff";
  navbar.style.backgroundColor = isLightMode ? "#e8e8e8" : "#222";
  button.textContent = isLightMode ? "Dark Mode" : "Light Mode";
  heading.textContent = isLightMode ? "Light Mode" : "Dark Mode";
});