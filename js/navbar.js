const burgerCheck = document.querySelector('#check-burger');
const navbar = document.querySelector('#navbar');
const navheader = document.querySelector('.header-nav')
const triggerNav = document.querySelector('#navbar-white');


const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
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
