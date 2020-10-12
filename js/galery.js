//to run this program it needs masonry imagesloaded, and infinte scroll

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item', //get div container
  gutter: 5, //give margin for each images
});

imagesLoaded( elem ).on( 'progress', function() {
  //layout Masonry after each iamge loads
  msnry.layout();
});

var infScroll = new InfiniteScroll('.grid', {
  //options
  path: `galery-grid{{#}}.html`, //will load html files with images on it
  append: '.img-link', //images class that will be loads
  outlayer: msnry, //if this not exist, masonry wont work with infinite scroll
  history: false, //keep url same
  status: '.page-load-status',
});
