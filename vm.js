const aboutTrigger = document.querySelector('#about-trigger');
const about = document.querySelector('.about');
const visi = document.querySelector('.visi');
const misi = document.querySelector('.misi');

const vmOptions = {};

const vmObserver = new IntersectionObserver(function(entries, vmObserver) {
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
