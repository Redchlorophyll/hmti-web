const gridTrigger = document.querySelector('#grid-trigger');
const gridNews1 = document.querySelector('.grid1');
const gridNews2 = document.querySelector('.grid2');
const gridNews3 = document.querySelector('.grid3');
const gridNews4 = document.querySelector('.grid4');


const gridOptions = {};

const gridObserver = new IntersectionObserver(function(entries, gridObserver) {
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
