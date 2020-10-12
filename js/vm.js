var aboutTrigger = document.querySelector('#about-trigger');
var about = document.querySelector('.about');
var visi = document.querySelector('.visi');
var misi = document.querySelector('.misi');

var vmOptions = {};

var vmObserver = new IntersectionObserver(function(entries, vmObserver) {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        about.classList.add("text-anim");
        about.classList.add("text-transition");

        visi.classList.add("text-anim");
        visi.classList.add("text-transition");

        misi.classList.add("text-anim");
        misi.classList.add("text-transition");
      }
  });

}, vmOptions);



vmObserver.observe(aboutTrigger);
