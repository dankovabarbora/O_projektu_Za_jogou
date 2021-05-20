'use strict';
console.log('funguju');

const btnElm = document.querySelector('#nav-btn');
const menuElm = document.querySelector('nav');

const klik = () => {
  console.log('klikam jak blazen');
  menuElm.classList.toggle('nav-closed');
};

btnElm.addEventListener('click', klik);
