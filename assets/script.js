let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
  let top = window.scrollY;
  if (top >= 100) {
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.backgroundColor = 'transparent';
    for (let i = 0; navLinks.length; i++) {
      navLinks[i].style.color = '#36392d';
    }
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = 'blur(0)';
    for (let i = 0; navLinks.length; i++) {
      navLinks[i].style.color = '#cfd2c6';
    }
  }
};

var slider = tns({
  container: '.my-slider',
  items: 7,
  gutter: 20,
  slideBy: 1,
  controlsPosition: 'bottom',
  mouseDrag: true,
  autoplay: false,
  autoplayButtonOutput: false,
  controlsContainer: '#custom-control',
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    640: {
      items: 2,
      nav: false,
    },
    1440: {
      items: 3,
    },
  },
  // mode: 'gallery',
  // speed: 2000,
  // animateIn: "scale",
  // controls: false,
  // nav: false,
  // edgePadding: 20,
  // loop: false,
});

// Menu content
