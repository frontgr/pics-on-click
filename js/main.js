const myButton = document.getElementById("my-button");
const btn1 = document.querySelector(".footer__buttons-item_orange");
const btn2 = document.querySelector(".footer__buttons-item_green");
const btn3 = document.querySelector(".footer__buttons-item_purple");

// const image1 = document.querySelector(".content__img");
// const image2 = document.querySelector(".content__img");
// const image3 = document.querySelector(".content__img");

let popupOpen = false;
let popup;
let overlay;

myButton.addEventListener("click", () => {
  // Open a popup window
  if (!popupOpen) {
    // Create overlay
    overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Adjust the alpha value to control darkness
    overlay.style.zIndex = 999;
    document.body.appendChild(overlay);

    // Create popup
    popup = document.createElement("div");
    popup.innerHTML = "Это всплывающее окно";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.width = "400px";
    popup.style.height = "200px";
    popup.style.color = "#ffffff";
    popup.style.background = "#be8aff";
    popup.style.borderКadius = "7px";
    popup.style.zIndex = 1000;
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";

    document.body.appendChild(popup);

    popupOpen = true;

    // Add click event listener to the popup here
    popup.addEventListener("click", () => {
      // Close the popup when clicking on the popup
      if (popupOpen) {
        // Remove popup from document
        popup.remove();
        // Remove overlay
        overlay.remove();
        // Set the popup window flag to closed state
        popupOpen = false;
      }
    });
  }
});

// btn1.addEventListener("click", () => {
//   document.body.style.backgroundColor = btn1.dataset.color;
//   image1.src = prompt("/img/img_orange.jpg");
// });
// btn2.addEventListener("click", () => {
//   document.body.style.backgroundColor = btn2.dataset.color;
// });
// btn3.addEventListener("click", () => {
//   document.body.style.backgroundColor = btn3.dataset.color;
// });

// btn1.addEventListener("click", () => {
//   const image = document.querySelector(".content__img");
//   image.src = images[0].src;
// });

// btn2.addEventListener("click", () => {
//   const image = document.querySelector(".content__img");
//   image.src = images[1].src;
// });

// btn3.addEventListener("click", () => {
//   const image = document.querySelector(".content__img");
//   image.src = images[2].src;
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".footer__buttons-item");
//   const image = document.querySelector(".img-change");
//   console.log(image);

//   const images = [
//     { src: "/img/img_orange.jpg" },
//     { src: "/img/img_green.jpg" },
//     { src: "/img/img_purple.jpg" },
//   ];

//   buttons.forEach((button) => button.addEventListener("click", changeImage));

//   function changeImage(button) {
//     console.log(button);
//     image.src = images[button.dataset.image].src;
//   }
// });

// ---

// document.addEventListener("DOMContentLoaded", function () {
//   const images = [
//     "img/img_orange.jpg",
//     "img/img_green.jpg",
//     "img/img_purple.jpg",
//   ];

//   function changeImage(button) {
//     const imageIndex = button - 1;
//     const image = images[imageIndex];
//     document.querySelector(".image").src = image;
//   }
//   btn1.addEventListener("click", changeImage);
//   btn2.addEventListener("click", changeImage);
//   btn3.addEventListener("click", changeImage);
// });

// -----
// let imageNumber = 1;

// function changeImage() {
//   let image = document.getElementById("image");
//   image.src = "/img/image-" + imageNumber + ".jpg";
// }
// console.log(btn1);
// btn1.onclick = changeImage;
// btn2.onclick = changeImage;
// btn3.onclick = changeImage;

// -----
// var images = [
//   "././img/image-1.jpg",
//   "././img/image-2.jpg",
//   "././img/image-3.jpg",
// ];
// function changeImage() {
//   var image = document.getElementById("image");
//   image.src = images[this.id - 1];
// }
// btn1.onclick = changeImage;
// btn2.onclick = changeImage;
// btn3.onclick = changeImage;

// -----

// var images = [
//   "././img/image-1.jpg",
//   "././img/image-2.jpg",
//   "././img/image-3.jpg",
// ];
// var imageIndex = 0;

// function changeImage() {
//   var image = document.getElementById("image");
//   image.src = images[imageIndex];
//   imageIndex = (imageIndex + 1) % images.length;

//   myButton.style.background = "red";
// }
// btn1.onclick = changeImage;
// btn2.onclick = changeImage;
// btn3.onclick = changeImage;

// -----
var images = [
  "././img/image-1.jpg",
  "././img/image-2.jpg",
  "././img/image-3.jpg",
];
var imageIndex = 0;

function changeImage() {
  var image = document.getElementById("image");
  var button = event.target;

  switch (button.id) {
    case "btn1":
      image.src = images[0];
      break;
    case "btn2":
      image.src = images[1];
      break;
    case "btn3":
      image.src = images[2];
      break;
  }
}

btn1.onclick = changeImage;
btn2.onclick = changeImage;
btn3.onclick = changeImage;
