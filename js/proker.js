var prokerGrid1 = document.querySelector('.proker-container .proker-card:nth-child(1)');
var prokerGrid2 = document.querySelector('.proker-container .proker-card:nth-child(2)');
var prokerGrid3 = document.querySelector('.proker-container .proker-card:nth-child(3)');
var prokerGrid4 = document.querySelector('.proker-container .proker-card:nth-child(4)');
var prokerTrigger = document.querySelector('#proker-trigger');

var prokerOptions = {};

var prokerObserver = new IntersectionObserver(function(entries, prokerObserver) {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
        prokerGrid1.classList.add("show-proker");
        prokerGrid2.classList.add("show-proker");
        prokerGrid3.classList.add("show-proker");
        prokerGrid4.classList.add("show-proker");
      }
  });

}, prokerOptions);


prokerObserver.observe(prokerTrigger);
