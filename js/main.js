// !============================pop up
const myButton = document.getElementById("my-button");

const popup = document.getElementById("popup");
const closeButton = document.querySelector(".popup__close");

function openPopup() {
  popup.style.display = "block";
}
function closePopup() {
  popup.style.display = "none";
}
myButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
// !============================pop up

// !============================cnange color func
document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("image");
  const buttons = document.querySelectorAll(".footer__buttons-item");
  const contentBtn = document.querySelector(".content__btn");

  function changeTheme(imageIndex, buttonColor) {
    const newImageSrc = `img/img-${imageIndex}.webp`;
    imageElement.src = newImageSrc;
    contentBtn.style.backgroundColor = buttonColor;
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const imageIndex = button.getAttribute("data-image");
      const buttonColor = window.getComputedStyle(button).backgroundColor;
      changeTheme(imageIndex, buttonColor);
    });
  });
});
// !============================cnange color func
