const scroll = document.querySelector('.curve');
const bg = document.querySelector('.bg');
const bound = bg.getBoundingClientRect();



var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


var findMe = document.querySelector('#find-me');
window.addEventListener('scroll', function (event) {
  //console.log(window.scrollY);
	if (isInViewport(findMe)) {
    let value = 0
    value = 1 + window.scrollY/-500;
    console.log(value);
    scroll.style.transform = `scaleY(${value})`;
	}
}, false);
