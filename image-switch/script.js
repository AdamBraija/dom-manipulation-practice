const image = document.getElementById("mainImage");
const pictures = ["../images/pic2.jpg", "../images/pic3.jpg", "../images/pic1.jpg"];
let currentIndex = 0;
image.addEventListener("click", () => {
  image.src = pictures[currentIndex];
  currentIndex = (currentIndex + 1) % pictures.length;
});