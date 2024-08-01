// carousel javaScript
const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth;
let scrollInterval;

function startSliding() {
  scrollInterval = setInterval(() => {
    const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;
    if (slidesContainer.scrollLeft < maxScrollLeft) {
      slidesContainer.scrollLeft += slideWidth;
    } else {
      slidesContainer.scrollLeft = 0; 
    }
  }, 2000);
}

function stopSliding() {
  clearInterval(scrollInterval);
}

startSliding();

slidesContainer.addEventListener('mouseover', stopSliding);
slidesContainer.addEventListener('mouseleave', startSliding);


// accordion javaScript 
document.addEventListener('DOMContentLoaded', function () {
  const accordionCards = document.querySelectorAll('.accordion-card');

  accordionCards.forEach(card => {
      const upArrow = card.querySelector('.up-arrow');
      const downArrow = card.querySelector('.down-arrow');
      const text = card.querySelector('.accordion-text');

      downArrow.addEventListener('click', () => {
          text.style.display = 'none';
          downArrow.style.display = 'none';
          upArrow.style.display = 'block';
      });

      upArrow.addEventListener('click', () => {
          text.style.display = 'block';
          upArrow.style.display = 'none';
          downArrow.style.display = 'block';
      });
  });
});

// header sticky
window.onscroll = function() { headerstick(); };

var header = document.getElementById("header");

var sticky = header.offsetTop;

function headerstick() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });
});

