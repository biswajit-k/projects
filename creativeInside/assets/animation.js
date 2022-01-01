import lottieWeb from 'https://cdn.skypack.dev/lottie-web';


var isometricContainer = document.querySelector('.potential__isometric');
var state = 'play';

var isometricAnimation = lottieWeb.loadAnimation({
  container: isometricContainer,
  path: 'assets/net-circle.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});


// var loader = document.querySelector('.loader');

// var loadAnimation = lottieWeb.loadAnimation({
//   container: loader,
//   path: 'assets/load.json',
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   name: "load Animation",
// });

// window.addEventListener('load', () => {
//   loader.className += " hidden";
// })