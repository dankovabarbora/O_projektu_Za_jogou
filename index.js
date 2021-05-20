'use strict';
console.log('funguju');

const btnElm = document.querySelector('#nav-btn');
const menuElm = document.querySelector('nav');

btnElm.addEventListener("click", ()=> {
  menuElm.classList.toggle("nav-closed");
});

document.querySelectorAll(".nav-link").forEach((item)=> {
  item.addEventListener("click", ()=> {
    menuElm.classList.add("nav-closed");
  });
});

/*const klik = () => {
  console.log('klikam jak blazen');
  menuElm.classList.toggle('nav-closed');
};

btnElm.addEventListener('click', klik);*/
