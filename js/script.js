let hamBtn = document.querySelector(".hamburger");
let xBtn = document.querySelector(".x");
let imageCont = document.querySelector(".image-cont");
let colorProgress = document.querySelectorAll(".color-progress");


function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

function hamburgerOpen() {
  let mobileMenu = document.querySelector(".mobile-menu-cont");
  mobileMenu.classList.add("unhide");
  mobileMenu.classList.remove("hide");
  hamBtn.classList.add("hide");
  xBtn.classList.remove("hide");
  xBtn.classList.add("unhide");
}

function xClose() {
  let mobileMenu = document.querySelector(".mobile-menu-cont");
  mobileMenu.classList.add("hide");
  mobileMenu.classList.remove("unhide");
  hamBtn.classList.remove("hide");
  xBtn.classList.add("hide");
  xBtn.classList.remove("unhide");
}

function imgAddOverlay() {
  document.querySelector(".playbtn-cont").classList.add("padding-anim");
  imageCont.classList.add("overlay-anim");
}

function imgRemoveOverlay() {
  document.querySelector(".playbtn-cont").classList.remove("padding-anim");
  imageCont.classList.remove("overlay-anim");
}
hamBtn.addEventListener("click", hamburgerOpen);

xBtn.addEventListener("click", xClose);

// hover animation
imageCont.addEventListener("mouseover", imgAddOverlay);
imageCont.addEventListener("mouseout", imgRemoveOverlay);

window.addEventListener("load", () => {
    setTimeout(function () {
      colorProgress[0].classList.add("progress-anim");
    }, 0);
    setTimeout(function () {
      colorProgress[1].classList.add("progress-anim");
    }, 3000);
    setTimeout(function () {
      colorProgress[2].classList.add("progress-anim");
    }, 6000);

})

