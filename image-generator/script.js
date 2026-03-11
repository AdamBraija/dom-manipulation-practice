const button = document.getElementById("btn");
const container = document.getElementById("container");
const pictures = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/pic3.jpg"];
let currentIndex = 0;
button.addEventListener("click", () => {
  container.innerHTML = "<span class='loading'></span>";
  setTimeout(() => {
    container.innerHTML = "";
    const image = document.createElement("img");
    image.src = pictures[currentIndex];
    image.alt = "Generated picture";
    container.appendChild(image);
    currentIndex = (currentIndex + 1) % pictures.length;
  }, 2000);
});