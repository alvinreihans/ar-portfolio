const splashScreen = document.getElementById('splashscreen');
const splashscreenlogo = document.getElementById('splashscreen-logo');
function splashOnLoad() {
  setTimeout(function () {
    splashscreenlogo.classList.add('show');
  }, 100);
  setTimeout(function () {
    splashScreen.classList.add('hidden');
  }, 2000);
  setTimeout(function () {
    splashScreen.remove();
  }, 2800);
}
