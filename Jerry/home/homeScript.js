let typed = new Typed(".near-name", {
  strings: [
    "Tyrannosaurus Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Diplodocus",
    "Allosaurus",
    "Ankylosaurus",
    "Pterodactyl",
    "Spinosaurus",
    "Apatosaurus",
    "Iguanodon",
    "Carnotaurus",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

window.addEventListener("DOMContentLoaded", () => {
  const square = document.querySelector(".testimonial-slide");
  const width = square.offsetWidth;
  square.style.height = `${width}px`;
});
AOS.init();
var swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      // translate: ["-5%", 0, -200],
      translate: ["-120%", 0, -500],
      // rotate: [0, 100, 0],
      
    },
    next: {
      origin: "right center",
      // translate: ["5%", 0, -200],
      translate: ["120%", 0, -500],
      // rotate: [0, -100, 0],
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      $('.card').hide(0);
      $('.card').removeClass('aos-init').removeClass('aos-animate');
    },
    slideChangeTransitionEnd: function () {
      $('.card').show(0);
      AOS.init();
    },
  } 
});
let midHead = [
  "Remember when , into the dark",
  "I alwyas Belive that you love me",
  "Think like that",
  `We go the love \n I'll follow you appolo`,
];
let imgs = [1,2,3,4];
// `background: url("../img/1.jpg") center/cover fixed no-repeat;`
let circles = document.querySelectorAll(".inside-cirle");
swiper6.on("slideChange", () => {
  // const cards = document.querySelectorAll(".card");
  // console.log(cards);
  const myHead = document.querySelector(".mid-head")
  const imgCircle = document.querySelector(".img-circle");
  imgCircle.style.background =  `url("../img/${imgs[swiper6.activeIndex]}.jpg") center/cover fixed no-repeat`
  myHead.style.opacity = 0;
  setTimeout(() => {
    myHead.innerHTML = midHead[swiper6.activeIndex];
    myHead.style.opacity = 1;
  }, 300);
  console.log(swiper6.activeIndex);
  if (swiper6.activeIndex - 1 != -1){
    circles[swiper6.activeIndex - 1].classList.remove("present");
    
  }
  circles[swiper6.activeIndex].classList.add("present");
  if (swiper6.activeIndex + 1 < circles.length)
    circles[swiper6.activeIndex + 1].classList.remove("present");
});

// cards.forEach((card) => {
//   // if(card.classList.contains("aos-init")){
//   //   card.classList.remove("aos-init");
//   //   card.classList.add("aos-init");
//   //   card.classList.remove("aos-animate");
//   //   card.classList.add("aos-animate");

//   }
//   // card.classList.toggle("aos-init");
//   // card.classList.toggle("aos-animate");
// });
