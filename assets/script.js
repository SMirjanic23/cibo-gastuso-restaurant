let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.nav-link');

let menuContent = document.querySelector('.menu-content');
const drinks = document.querySelector('#drinks');
const appetizers = document.querySelector('#appetizers');
const pasta = document.querySelector('#pasta');
const pizza = document.querySelector('#pizza');
const salads = document.querySelector('#salads');
const desserts = document.querySelector('#desserts');
const menuBtn = document.querySelector('.menu-btns');

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navbar');

function toggleNav() {
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function () {
  toggleNav();
});

var slider = tns({
  container: '.slider',
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
    800: {
      items: 2,
      nav: false,
    },
    1440: {
      items: 3,
    },
  },
});

// Menu content

function getMenu() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', '/menu.json', false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

let response = getMenu();

let menu = response.menu.items;

let menuItems = '';

function RestaurantMenu(selectedMenuBtn) {
  for (const el in menu) {
    let category = menu[el].category;
    if (selectedMenuBtn === category) {
      menuItems += `<div class="menu-item">
       <div class="menu-item__details">
       <p class="menu-item__name">${menu[el].name}</p>
       <p class="dots"></p>
       <p class="menu-item__price">${menu[el].price}</p>
       </div>
       <p>${menu[el].description}</p>
     </div>`;
    }
  }
  menuContent.innerHTML = menuItems;
  menuItems = '';
}

menuBtn.addEventListener('click', (event) => {
  const selectedMenuBtn = event.target.value;
  RestaurantMenu(selectedMenuBtn);
});
