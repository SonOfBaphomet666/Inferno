// МЕНЮ
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
};


// clock
function clock() {
    var now = new Date();
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

// hour marks

ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "white";

  // write Hours
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = " #16bff3";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
  }

window.requestAnimationFrame(clock);

// clock end


// window.addEventListener('scroll', e => {
// 	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
// })
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content'
// })

// ПЛАВНОСТЬ
// document.addEventListener("DOMContentLoaded", makeLinksSmooth);

// function makeLinksSmooth() { 
//   const navLinks = document.querySelectorAll("navbar a"); 

//   navLinks.forEach((link) => {
//     link.addEventListener("click", smoothScroll);
//   });
// }


// function smoothScroll(e) {
//   e.preventDefault();
//   const targetId = this.getAttribute("href");
//   const targetElement = document.querySelector(targetId);

//   if (targetElement) { 
//     targetElement.scrollIntoView({ behavior: "smooth", });
//   }
//   targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
// }

// LINK
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



let scrollContainer = document.querySelector(".main");
let backBtn = document.getElementById("backBtn");
let backNext = document.getElementById("backNext");

scrollContainer.addEventListener("wheel",(evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});


nextBtn.addeventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrolLeft += 900;
});

backBtn.addeventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrolLeft += 900;
});


// // Слайды
// let i = 0;
// let images = [];
// let time = 3000;

// // images list
// images[0] = 'https://galleryoftattoosnow.com/JonvonGlahnOldeTownTattooHOSTED/images/gallery/bio%20organic%20arm%20sleeve%20color%20tattoo%20jon%20von%20glahn%20tattoojon.com1.jpg?v=1';
// images[1] = 'https://inkppl.com/en/assets/components/phpthumbof/cache/180721-2028-5771.2b25590991806d5f8e8489e2406bdc48.jpg'
// images[2] = 'https://d1kq2dqeox7x40.cloudfront.net/images/posts/20221219_QMKefaLY3730aLC.jpg?w=375';

// function changeImg() {
//   document.slide.src = images[i];

//   if (i < images.length){
//     i++;
//   } else {
//     i = 0;
//   }


// setTimeout("changeImg()",time);
// }

// window.onload = changeImg;