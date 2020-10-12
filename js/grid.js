var gridTrigger = document.querySelector('#grid-trigger');
var gridNews1 = document.querySelector('.grid1');
var gridNews2 = document.querySelector('.grid2');
var gridNews3 = document.querySelector('.grid3');
var gridNews4 = document.querySelector('.grid4');


var gridOptions = {};

var gridObserver = new IntersectionObserver(function(entries, gridObserver) {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      gridNews1.classList.add("grid-anim");
      gridNews2.classList.add("grid-anim");
      gridNews3.classList.add("grid-anim");
      gridNews4.classList.add("grid-anim");
    }
  });

}, gridOptions);

gridObserver.observe(gridTrigger);
