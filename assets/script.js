const splashScreen = document.getElementById('splashscreen');
const splashscreenlogo = document.getElementById('splashscreen-logo');
if (!sessionStorage.getItem('splashShown')) {
  function splashOnLoad() {
    setTimeout(function () {
      splashscreenlogo.classList.add('show');
    }, 500);

    setTimeout(function () {
      splashScreen.classList.add('hidden');
    }, 3000);
    setTimeout(function () {
      splashScreen.remove();
      sessionStorage.setItem('splashShown', 'true');
    }, 3800);
  }
} else {
  // Hide splash screen if visited
  splashScreen.style.display = 'none';
}
