var burgerCheck = document.querySelector('#check-burger');
var navbar = document.querySelector('#navbar');
var navheader = document.querySelector('.header-nav')
var triggerNav = document.querySelector('#navbar-white');


var sectionOneOptions = {};

var sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        navheader.classList.add("header-trigger");
      } else {
        navheader.classList.remove("header-trigger");
      }
  });

}, sectionOneOptions);


burgerCheck.addEventListener('click', () => {
  navbar.classList.toggle('hide')
  navheader.classList.toggle('header-white');


})

sectionOneObserver.observe(triggerNav);
