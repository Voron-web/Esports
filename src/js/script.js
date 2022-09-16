const cards = document.querySelectorAll('.card');
const questions = document.querySelectorAll('.question-block')

cards.forEach((element, key, array) => {
   if (key !== 0) {    //exception first card
      if (element !== null) {
         element.addEventListener('click', () => {
            element.classList.toggle('active')
         })
      }
   }
})

questions.forEach((element, key, array) => {
   element.addEventListener('click', () => {
      element.classList.toggle('active')
   })
})


//////////////////////
const modalSale = document.querySelector('.modal_sale');
const cancelBtn = document.querySelector('#canselBtn');
const closeBtn = document.querySelector('#saleClose');
const saleAllBtn = document.querySelector('.items__title-btn');

function openModal() {
   modalSale.classList.remove('hidden');
}

function closeModal() {
   modalSale.classList.add('hidden');
}

if (saleAllBtn !== null) {
   saleAllBtn.addEventListener('click', () => {
      openModal();
   })
}
if (cancelBtn !== null) {

   cancelBtn.addEventListener('click', () => {
      closeModal();
   })
}
if (closeBtn !== null) {

   closeBtn.addEventListener('click', () => {
      closeModal();
   })
}


////Burger

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
   console.log('click');
   burgerBtn.classList.toggle('active');
   burgerMenu.classList.toggle('active');
}
)