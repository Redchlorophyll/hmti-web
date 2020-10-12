import mapboxgl from 'mapbox-gl';

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoibG9yZGRhaHMiLCJhIjoiY2tmMThoYzB6MHFrcDJ4cDdudWYwcXpxcCJ9.oYH4hrvzSrz6qHJAu_pcGw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [109.2716048, -7.413891], // starting position [lng, lat]
zoom: 14 // starting zoom
});

var marker = new mapboxgl.Marker()
.setLngLat([109.2716048, -7.413891])
.addTo(map);

map.scrollZoom.disable();
