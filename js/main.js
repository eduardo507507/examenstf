const expertsContainer = document.querySelector('.experts');
const expertItems = Array.from(expertsContainer.querySelectorAll('.cont-expert'));

let isScrolling = false;

function scrollToNextExpert() {
  const currentExpertIndex = expertItems.findIndex(item => item.getBoundingClientRect().left >= 0);
  const nextExpertIndex = currentExpertIndex === expertItems.length - 1 ? 0 : currentExpertIndex + 1;

  expertItems[nextExpertIndex].scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  });
}

expertsContainer.addEventListener('scroll', () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(scrollToNextExpert, 3000);
});


// Nuevo código que quieres agregar

const enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
  if (semaforo) {
    document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
    semaforo = false;
  } else {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo = true;
  }

  enlacesHeader.classList.toggle("menudos");
});
