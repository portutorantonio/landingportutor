// Language switching function
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[class^="lang-"]');
  elements.forEach(element => {
    const classes = element.className.split(' ');
    classes.forEach(cls => {
      if (cls.startsWith('lang-') && cls !== `lang-${lang}`) {
        element.classList.add('hidden');
      } else if (cls === `lang-${lang}`) {
        element.classList.remove('hidden');
      }
    });
  });
  document.querySelectorAll('.language-selector button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase() === lang) btn.classList.add('active');
  });
}

// Scroll behavior for header
let lastScroll = 0;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 200) { // Hide header after scrolling 200px down
    if (currentScroll > lastScroll) {
      header.classList.add('hidden-header');
    } else {
      header.classList.remove('hidden-header');
    }
  } else {
    header.classList.remove('hidden-header'); // Show header when near top
  }
  lastScroll = currentScroll;
});