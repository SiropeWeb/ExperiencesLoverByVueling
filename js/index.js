$(document).ready(function () {
  new WOW().init();

  gsap.to(".loader", {
    duration: 1,
    scaleY: "0",
    y: "400",
    ease: "easeOut",
    delay: 0.5,
  });

  gsap.from(".imagen-avion", {
    duration: 1,
    scale: 0,
    x: "-30%",
    ease: "easeOut",
    delay: 0.8,
  });

  gsap.from(".imagen-avion1", {
    duration: 1,
    y: "2px",
    repeat: -1,
    yoyo: true,
    delay: 1.5,
    ease: Power1.easeInOut,
  });

  gsap.from(".imagen-nubes", {
    duration: 1,
    y: "10px",
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: 1,
  });
  gsap.from(".imagen-nubes1", {
    duration: 1,
    opacity: 0,
    delay: 1,
  });

  gsap.from(".imagen-pajaro", {
    duration: 1,
    y: "10px",
    repeat: -1,
    yoyo: true,
    delay: 1.2,
    ease: Power1.easeInOut,
  });

  gsap.from(".imagen-pajaro1", {
    duration: 1,
    opacity: 0,
    delay: 1,
  });

  gsap.from(".video-play", {
    duration: 0.8,
    scale: "1.2",
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  });

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  $(".load").hide();
  $(".body").show();

  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: true,
      start:'top top',
      end:'3000',
    
    },
  });


  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
  }).mount();

  new Splide(".splide2", {
    type: "loop",
    perPage: 1,
    autoplay: true,
  }).mount();
});

$(window).bind("DOMContentLoaded load resize", function () {
  if ($(window).innerWidth() <= 1024) {
    $(".hacer-textos").removeClass("animate__fadeInRight");
    $(".hacer-textos").addClass("animate__fadeInUp");
  }
});

function botonRequisitos() {
  $("#listado-requisitos").toggleClass("none");
}

function cerrarMenumovil() {
  $("#menu-movil").toggleClass("none");
}

function abrirVideoGeneral() {
  $("#pop-up-video-general").removeClass("none");
  var media = $("#video-general").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideoGeneral() {
  $("#pop-up-video-general").addClass("none");
  var media = $("#video-general").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo1() {
  $("#pop-up-video1").removeClass("none");
  var media = $("#video1").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo1() {
  $("#pop-up-video1").addClass("none");
  var media = $("#video1").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo2() {
  $("#pop-up-video2").removeClass("none");
  var media = $("#video2").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo2() {
  $("#pop-up-video2").addClass("none");
  var media = $("#video2").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo3() {
  $("#pop-up-video3").removeClass("none");
  var media = $("#video3").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo3() {
  $("#pop-up-video3").addClass("none");
  var media = $("#video3").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo4() {
  $("#pop-up-video4").removeClass("none");
  var media = $("#video4").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo4() {
  $("#pop-up-video4").addClass("none");
  var media = $("#video4").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo5() {
  $("#pop-up-video5").removeClass("none");
  var media = $("#video5").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo5() {
  $("#pop-up-video5").addClass("none");
  var media = $("#video5").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo6() {
  $("#pop-up-video6").removeClass("none");
  var media = $("#video6").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo6() {
  $("#pop-up-video6").addClass("none");
  var media = $("#video6").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideoGeneralMovil() {
  $("#pop-up-video-general-movil").removeClass("none");
  var media = $("#video-general-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideoGeneralMovil() {
  $("#pop-up-video-general-movil").addClass("none");
  var media = $("#video-general-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo1movil() {
  $("#pop-up-video1-movil").removeClass("none");
  var media = $("#video1-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo1movil() {
  $("#pop-up-video1-movil").addClass("none");
  var media = $("#video1-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo2movil() {
  $("#pop-up-video2-movil").removeClass("none");
  var media = $("#video2-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo2movil() {
  $("#pop-up-video2-movil").addClass("none");
  var media = $("#video2-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo3movil() {
  $("#pop-up-video3-movil").removeClass("none");
  var media = $("#video3-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo3movil() {
  $("#pop-up-video3-movil").addClass("none");
  var media = $("#video3-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo4movil() {
  $("#pop-up-video4-movil").removeClass("none");
  var media = $("#video4-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo4movil() {
  $("#pop-up-video4-movil").addClass("none");
  var media = $("#video4-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo5movil() {
  $("#pop-up-video5-movil").removeClass("none");
  var media = $("#video5-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo5movil() {
  $("#pop-up-video5-movil").addClass("none");
  var media = $("#video5-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo6movil() {
  $("#pop-up-video6-movil").removeClass("none");
  var media = $("#video6-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo6movil() {
  $("#pop-up-video6-movil").addClass("none");
  var media = $("#video6-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo7movil() {
  $("#pop-up-video7-movil").removeClass("none");
  var media = $("#video7-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo7movil() {
  $("#pop-up-video7-movil").addClass("none");
  var media = $("#video7-movil").get(0);
  media.pause();
  media.currentTime = 0;
}

function abrirVideo8movil() {
  $("#pop-up-video8-movil").removeClass("none");
  var media = $("#video8-movil").get(0);
  media.play();
  media.currentTime = 0;
}

function cerrarVideo8movil() {
  $("#pop-up-video8-movil").addClass("none");
  var media = $("#video8-movil").get(0);
  media.pause();
  media.currentTime = 0;
}
