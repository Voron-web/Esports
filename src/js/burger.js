////Burger

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
   console.log('click');
   burgerBtn.classList.toggle('active');
   burgerMenu.classList.toggle('active');
}
)