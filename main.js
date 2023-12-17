let landing = document.querySelector(".landing-page");
landing.style.backgroundImage = "url('../images/image-3.jpg')";
let html = document.querySelector(":root");
let colorSpans = document.querySelectorAll(".change-main-color span");
let sittingBox = document.querySelector(".sitting-box");
let fonts = document.querySelectorAll(".sitting-box .change-fonts .fonts p");
let backgroundImages = [
  "url('../images/image-3.jpg')",
  "url('../images/image-2.jpg')",
  "url('../images/image-5.jpg')",
  "url('../images/image-4.jpg')",
];
let i = 1;
let counter;
let htmlStyle = getComputedStyle(html);
let check = document.querySelector(
  ".sitting-box .stop-change-background input"
);
let progress = document.querySelectorAll(".skills .skill-box .progress span");
let skillsSection = document.querySelector(".skills");
let orGallary = document.querySelector(".gallary");
let images = document.querySelectorAll(".gallary .images-box img");
let aboutUs = document.querySelector(".about-us");
let skills = document.querySelector(".skills");
let gallary = document.querySelector(".gallary");
let timeLins = document.querySelector("time-line");
let showSpans = document.querySelectorAll(".sitting-box .show-bullets span")
let bullets = document.querySelectorAll(".nav-bullets .bullet");
let navBullets = document.querySelector(".nav-bullets")
// Set The Reset Button
document.querySelector(".sitting-box .reset").onclick = function() {
  changeBackground();
  window.localStorage.setItem("check", "noClear");
  check.checked = false;
  colorSpans.forEach((e) => {
    e.classList.remove("active");
  });
  colorSpans[0].classList.add("active");
  html.style.setProperty("--main-color", colorSpans[0].dataset.color);
  window.localStorage.setItem("color", colorSpans[0].dataset.color);
  navBullets.style.display = "block";
    showSpans[0].classList.add("active")
    showSpans[1].classList.remove("active")
    window.localStorage.setItem("show","show")
    document.body.style.fontFamily = fonts[0].dataset.font
    fonts.forEach((e) => {
      e.classList.remove("active");
    });
    fonts[0].classList.add("active")
    window.localStorage.setItem("font", fonts[0].dataset.font)

}

// Set Check To Local Storage
if (window.localStorage.getItem("check")) {
  if (window.localStorage.getItem("check") == "clear") {
    clearInterval(counter);
    window.localStorage.setItem("check", "clear");
    check.checked = "checked";
  } else {
    changeBackground();
    window.localStorage.setItem("check", "noClear");
  }
} else {
  window.localStorage.setItem("check", "");
  changeBackground();

}

// Set Color To Loacal Storage
if (window.localStorage.getItem("color")) {
  html.style.setProperty("--main-color", window.localStorage.getItem("color"));
  colorSpans.forEach((e) => {
    e.classList.remove("active");
  });
  colorSpans.forEach((e) => {
    if (e.dataset.color === window.localStorage.getItem("color")) {
      e.classList.add("active");
    }
  });
} else {
  window.localStorage.setItem("color", "");
}
// Set Fonts To Local Storage
if (window.localStorage.getItem("font")) {
  document.body.style.fontFamily = window.localStorage.getItem("font");
  fonts.forEach((e) => {
    e.classList.remove("active");
  });
  fonts.forEach((e) => {
    if (e.dataset.font === window.localStorage.getItem("font")) {
      e.classList.add("active");
    }
  });
} else {
  window.localStorage.setItem("font", "");
}
// Set Sow Bullets To Local Storage
if(window.localStorage.getItem("show")){
  if(window.localStorage.getItem("show")=== "show"){
    navBullets.style.display = "block";
    showSpans[0].classList.add("active")
    showSpans[1].classList.remove("active")
    
  } else {
    navBullets.style.display = "none";
    showSpans[1].classList.add("active")
    showSpans[0].classList.remove("active")
  }
} else {
  window.localStorage.setItem("show","")
}

document.onclick = function (e) {
  // Set Color From Sittings
  if (e.target.hasAttribute("data-color")) {
    let color = e.target.dataset.color;
    html.style.setProperty("--main-color", color);
    window.localStorage.setItem("color", color);
    colorSpans.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  // Set Change Background From Settings
  if (e.target.hasAttribute("type")) {
    if (check.checked) {
      clearInterval(counter);
      window.localStorage.setItem("check", "clear");
    } else {
      changeBackground();
      window.localStorage.setItem("check", "noClear");
    }
  }
  // Set Sitting Box
  if (e.target.classList.contains("sittings")) {
    sittingBox.classList.toggle("active");
    e.target.classList.toggle("active");
  }
  // Set Fonts From Sittings
  if (e.target.classList.contains("font")) {
    fonts.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    let font = e.target.dataset.font;
    document.body.style.fontFamily = font;
    window.localStorage.setItem("font", font);
  }

  if(e.target.classList.contains("show")){
    let showSpans =document.querySelectorAll(".sitting-box .show-bullets span");
    showSpans.forEach(el=>{
      el.classList.remove("active")
      if(e.target.innerHTML === "Yes"){
        window.localStorage.setItem("show","show")
        navBullets.style.display = "block"
      } else {
        window.localStorage.setItem("show","dontShow")
        navBullets.style.display = "none"
      }
    })
    e.target.classList.add("active");
  }
};


// Creat Images Pop
images.forEach((e) => {
  e.addEventListener("click", (el) => {
    let overLay = document.createElement("div");
    overLay.classList.add("pop-overlay");
    document.body.appendChild(overLay);
    let popBox = document.createElement("div");
    popBox.classList.add("pop-box");
    let popImage = document.createElement("img");
    popImage.src = e.src;
    popBox.appendChild(popImage);
    document.body.appendChild(popBox);
    if (e.alt !== null) {
      let imgHeading = document.createElement("h3");
      let headingText = document.createTextNode(e.alt);
      imgHeading.appendChild(headingText);
      popBox.prepend(imgHeading);
      let closeSpan = document.createElement("span");
      closeSpan.appendChild(document.createTextNode("X"));
      closeSpan.classList.add("close-button");
      popBox.appendChild(closeSpan);
      closeSpan.onclick = function () {
        closeSpan.parentElement.remove();
        overLay.remove();
      };
    }
  });
});
bullets.forEach((bullet)=>{
 bullet.addEventListener("click",(el)=>{
  document.querySelector(el.target.dataset.section).scrollIntoView({
    behavior: "smooth"
  });
 })
})

let links = document.querySelectorAll(".landing-page .header-area ul li a")
links.forEach((link)=>{
  link.addEventListener("click",(el)=>{
    el.preventDefault()
   document.querySelector(el.target.dataset.section).scrollIntoView({
     behavior: "smooth"
   });
  })
 })


// OnScroll Set Progress
let started = false;
let height = skillsSection.offsetTop - 100;
window.onscroll = function () {
  if (window.scrollY >= height && started == false) {
    progress.forEach((el) => {
      setWidth(el);
    });
    started = true;
  }
};

let bar = document.querySelector(".bar");
bar.onclick = function(){
  document.querySelector(".landing-page .header-area ul").style.top = "0";
  bar.style.display = "none";
  let x  = document.createElement("span");
  x.appendChild(document.createTextNode("X"))
  x.classList.add("x")
  document.querySelector(".landing-page .header-area ul").appendChild(x)
  x.onclick = function() {
    document.querySelector(".landing-page .header-area ul").style.top = "-200%";
    bar.style.display = "block";
    x.remove()
  }
}



























// Functions
// Change Background Function
function changeBackground() {
  counter = setInterval(() => {
    if (i === backgroundImages.length) {
      i = 0;
    } else {
      landing.style.backgroundImage = backgroundImages[i++];
    }
  }, 1000 * 5);
}

function setWidth(el) {
  let width = el.dataset.progress;
  el.style.width = width;
}
