// SIDEBAR

const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab, .active-tab1, .active-tab2, .active-tab3, .active-tab4");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");
let activeIndex;
shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);
  shrink_btn.classList.add("hovered");
  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});
// search.addEventListener("click", () => {
//   document.body.classList.remove("shrink");
//   search.lastElementChild.focus();
// });
function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;
  if (activeIndex > 4) {
    topPosition += shortcuts.clientHeight;
  }
  active_tab.style.top = `${topPosition}px`;
}
function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");
  activeIndex = this.dataset.active;
  moveActiveTab();
}
sidebar_links.forEach((link) => link.addEventListener("click", changeLink));
function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;
  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");
  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}
tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});

// SHOWCASE ||

document.addEventListener('DOMContentLoaded', function(){
  iniciarApp();
});

function iniciarApp() {
  scrollAni();
  crearGaleria();
  AboutAni();
}

function scrollAni() {
  const anima1 = document.querySelector('.first');
  const anima2 = document.querySelector('.second');
  const anima3 = document.querySelector('.third');
  const showcasetext1 = document.querySelector('.one, .uno');
  const showcasetext2 = document.querySelector('.two, .dos');
  const showcasetext3 = document.querySelector('.three, .tres');
  // const body = document.querySelector('body');


  window.addEventListener('scroll', function() {
      if( showcasetext1.getBoundingClientRect().top < 0 ) {
          anima1.classList.add('ani1');
          // body.classList.add('body-scroll');
      } // else {
      //     anima1.classList.remove('ani');
      //     // body.classList.remove('body-scroll');
      // }
  });


window.addEventListener('scroll', function() {
  if( showcasetext2.getBoundingClientRect().top < 0 ) {
      anima2.classList.add('ani2');
      // body.classList.add('body-scroll');
  } // else {
  //     anima1.classList.remove('ani');
  //     // body.classList.remove('body-scroll');
  // }
});


window.addEventListener('scroll', function() {
  if( showcasetext3.getBoundingClientRect().top < 0 ) {
      anima3.classList.add('ani3');
      // body.classList.add('body-scroll');
  } // else {
  //     anima1.classList.remove('ani');
  //     // body.classList.remove('body-scroll');
  // }
});
}

// LINK DELAY ||

var url = document.getElementById('link1');

url.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log("url clicked...")

    setTimeout(() =>{
        window.location.href = "index.html";
        console.log("timeout executed...")
    }, 280);
});

var url = document.getElementById('link2');

url.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log("url clicked...")

    setTimeout(() =>{
        window.location.href = "productos.html";
        console.log("timeout executed...")
    }, 280);
});

var url = document.getElementById('link3');

url.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log("url clicked...")

    setTimeout(() =>{
        window.location.href = "contacto.html";
        console.log("timeout executed...")
    }, 280);
});

var url = document.getElementById('link4');

url.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log("url clicked...")

    setTimeout(() =>{
        window.location.href = "about.html";
        console.log("timeout executed...")
    }, 280);
});

var url = document.getElementById('link5');

url.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log("url clicked...")

    setTimeout(() =>{
        window.location.href = "precotiza.html";
        console.log("timeout executed...")
    }, 280);
});

// GALERIA

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for(let i = 1; i <= 24; i++ ) {
      const imagen = document.createElement("picture");
      imagen.innerHTML = `
          <source srcset="build/img/thumb/${i}.webp" type="image/webp">
          <img width="200" height="300" src="build/img/thumb/${i}.png" alt="imagen galeria">
      `;

      imagen.onclick = function() {
          mostrarImagen(i);
      }

      galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  const imagen = document.createElement("picture");
      imagen.innerHTML = `
          <source srcset="build/img/grande/${id}.webp" type="image/webp">
          <img width="200" height="300" src="build/img/grande/${id}.png" alt="imagen galeria">
      `;

      // crea overlay con la imagen
      const overlay = document.createElement("DIV");
      overlay.appendChild(imagen);
      overlay.classList.add("ab-overlay");
      overlay.onclick = function() {
          const body = document.querySelector("body");
          body.classList.remove("fijar")
          overlay.remove();  
      };

      //boton para cerrar el overlay
      const cerrarModal = document.createElement("P");
      cerrarModal.textContent = "X";
      cerrarModal.classList.add("btn-cerrar");
      cerrarModal.onclick = function() {
          const body = document.querySelector("body");
          body.classList.remove("fijar")
          overlay.remove();
      };

      overlay.appendChild(cerrarModal)

      // añadirlo al html
      const body = document.querySelector("body");
      body.appendChild(overlay);
      body.classList.add("fijar")
}

// About scrollAni ///////////////////////////////////

function AboutAni() {
  const about1 = document.querySelector('.about-one');
  const about2 = document.querySelector('.about-two');
  const about3 = document.querySelector('.about-three');
  const about4 = document.querySelector('.about-four');
  const aboutbubble1 = document.querySelector('.bubble-one');
  const aboutbubble2 = document.querySelector('.bubble-two');
  const aboutbubble3 = document.querySelector('.bubble-three');
  const aboutbubble4 = document.querySelector('.bubble-four');
  // const body = document.querySelector('body');


  window.addEventListener('scroll', function() {
      if( aboutbubble1.getBoundingClientRect().top < 0 ) {
          about1.classList.add('abu1');
          // body.classList.add('body-scroll');
      } // else {
      //     about1.classList.remove('ani');
      //     // body.classList.remove('body-scroll');
      // }
  });


window.addEventListener('scroll', function() {
  if( aboutbubble2.getBoundingClientRect().top < 0 ) {
      about2.classList.add('abu2');
      // body.classList.add('body-scroll');
  } // else {
  //     about1.classList.remove('ani');
  //     // body.classList.remove('body-scroll');
  // }
});


window.addEventListener('scroll', function() {
  if( aboutbubble3.getBoundingClientRect().top < 0 ) {
      about3.classList.add('abu3');
      // body.classList.add('body-scroll');
  } // else {
  //     anima1.classList.remove('ani');
  //     // body.classList.remove('body-scroll');
  // }
});

window.addEventListener('scroll', function() {
  if( aboutbubble4.getBoundingClientRect().bottom < 0 ) {
      about4.classList.add('abu4');
      // body.classList.add('body-scroll');
  } // else {
  //     about1.classList.remove('ani');
  //     // body.classList.remove('body-scroll');
  // }
});
}