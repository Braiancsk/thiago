const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10,
  });

let mundo1 = document.getElementById('mundo1');
let mundo2 = document.getElementById('mundo2');
let mundo3 = document.getElementById('mundo3');

let mundo1Btn = document.getElementById('mundo1-btn');
let mundo2Btn = document.getElementById('mundo2-btn');
let mundo3Btn = document.getElementById('mundo3-btn');

let span1 = document.getElementById('1');
let span2 = document.getElementById('2');
let span3 = document.getElementById('3');


mundo1Btn.addEventListener('click', ()=>{  
        mundo1.classList.add('mundo-active');
        span1.classList.add('mundo-title-active');
        span2.classList.remove('mundo-title-active');
        span3.classList.remove('mundo-title-active');
        mundo2.classList.remove('mundo-active');
        mundo3.classList.remove('mundo-active');
        
})

mundo2Btn.addEventListener('click', ()=>{  
    mundo2.classList.add('mundo-active');
    span2.classList.add('mundo-title-active');
    span3.classList.remove('mundo-title-active');
    span1.classList.remove('mundo-title-active');
    mundo1.classList.remove('mundo-active');
    mundo3.classList.remove('mundo-active');
})

mundo3Btn.addEventListener('click', ()=>{  
    mundo3.classList.add('mundo-active');
    span3.classList.add('mundo-title-active');
    span2.classList.remove('mundo-title-active');
    span1.classList.remove('mundo-title-active');
    mundo2.classList.remove('mundo-active');
    mundo1.classList.remove('mundo-active');
})

//menu
//script para acionar o menu mobile
let burgerBox = document.querySelector('.hamburger-wrapper');
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu-mobile');
let bg = document.querySelector('.bg');


burger.addEventListener('click', ()=>{
  burger.classList.toggle('is-active');
   menu.classList.toggle('menu-active');
  
   if(burger.classList.contains('is-active')){
     document.body.style.overflow = 'hidden';
     bg.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   }
});

//fechar ao clicar no bg

   bg.addEventListener('click', ()=>{
     menu.classList.remove('menu-active');
     burger.classList.remove('is-active');
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   });



//modal de formulário
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let modal = document.querySelector('.form-modal');
let bgModal = document.querySelector('.bg-form');

btn1.addEventListener('click', ()=>{
  modal.classList.toggle('form-active');
   if(modal.classList.contains('form-active')){
     document.body.style.overflow = 'hidden';
     bgModal.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bgModal.style.display = 'none';
   }
});

btn2.addEventListener('click', ()=>{
  modal.classList.toggle('form-active');
  
   if(modal.classList.contains('form-active')){
     document.body.style.overflow = 'hidden';
     bgModal.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bgModal.style.display = 'none';
   }
});

btn3.addEventListener('click', ()=>{
  modal.classList.toggle('form-active');
  
   if(modal.classList.contains('form-active')){
     document.body.style.overflow = 'hidden';
     bgModal.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bgModal.style.display = 'none';
   }
});

btn4.addEventListener('click', ()=>{
  modal.classList.toggle('form-active');
  
   if(modal.classList.contains('form-active')){
     document.body.style.overflow = 'hidden';
     bgModal.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bgModal.style.display = 'none';
   }
});

//fechar ao clicar no bg

bgModal.addEventListener('click', ()=>{
  modal.classList.remove('form-active');
  modalVideo.classList.remove('form-active');
  document.body.style.overflow = 'auto';
  bgModal.style.display = 'none';
});

let close = document.querySelector('.close');
close.addEventListener('click', ()=>{
  modal.classList.remove('form-active');
  document.body.style.overflow = 'auto';
  bgModal.style.display = 'none';
});


//modal video
let modalVideo = document.querySelector('.modal-video');
let btnVideo = document.getElementById('play');

btnVideo.addEventListener('click', ()=>{
  modalVideo.classList.toggle('form-active');
   if(modalVideo.classList.contains('form-active')){
     document.body.style.overflow = 'hidden';
     bgModal.style.display = 'block'; 
   }else{
     document.body.style.overflow = 'auto';
     bgModal.style.display = 'none';
   }
});