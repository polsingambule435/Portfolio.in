$(document).ready(function () {
  $(window).scroll(function () {
    // ------------------------------ sticky navbar on scroll script ------------------------------ //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // ------------------------------ scroll-up button show/hide script ------------------------------ //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // ------------------------------ slide-up script ------------------------------ //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // ------------------------------ removing smooth scroll on slide-up button click ------------------------------ //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // ------------------------------ Smooth scroll on Menu Items click ------------------------------ //

    $("html").css("scrollBehavior", "smooth");
  });

  // ------------------------------ Toggle Navbar ------------------------------ //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // ------------------------------ Typing Text Animation ------------------------------ //

  var typed = new Typed(".typing", {
    strings: ["FrontEnd Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["FrontEnd Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // ------------------------------ Owl Carousel ------------------------------ //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

// Website Link JS
function web1() {
  window.open("https://polsingambule.github.io/Charity/");
}
function web2() {
  window.open("https://polsingambule.github.io/Wireless-/");
}
function web3() {
  window.open("https://polsingambule.github.io/CollegeWebsite/");
}
function web4() {
  window.open("https://polsingambule.github.io/Portfolio/");
}
function web5() {
  window.open("https://polsingambule.github.io/Blunch/");
}
function web6() {
  window.open("https://polsingambule.github.io/tatasky/");
}
function web7() {
  window.open("https://polsingambule.github.io/nextportfolio/");
}
function web8() {
  window.open("https://polsingambule.github.io/ProFile/");
}
function web9() {
  window.open("https://polsingambule.github.io/Facebook/");
}
function web10() {
  window.open("https://polsingambule.github.io/Restraunt/");
}

function whats_messg() {
  window.open("https://wa.me/918379010643?text=Hellow");
}




function facebook_page() {
  window.open("https://www.facebook.com/pappu.ambule.71");
}
function linkdin_page() {
  window.open("https://in.linkedin.com/in/polsing-ambule-392322236");
}

function instagram_page() {
  window.open("#"); 
}
function twitter_page() {
  window.open("#"); 
}
function pinterest_page() {
  window.open("#"); 
}
function share_page() {
  window.open("#"); 
}