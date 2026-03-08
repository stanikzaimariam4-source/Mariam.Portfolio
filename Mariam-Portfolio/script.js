document.addEventListener("DOMContentLoaded", function () {

  const text = "Information Systems Security Student";
  let i = 0;
  const typingElement = document.querySelector(".typing-text");

  function typing() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 70);
    }
  }
  typing();

  const faders = document.querySelectorAll('.fade-in');

  function checkFade() {
    faders.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (position < screenPosition) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade();

});