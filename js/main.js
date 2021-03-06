const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10,
    
    768: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 10,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,  
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span id="'+ (index+1) + '" class="mundo-title ' + className + '">' + "Mundo " + (index + 1) + "</span>";
      },
    },
  });


  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
let mundo1 = document.getElementById('mundo1');
let mundo2 = document.getElementById('mundo2');
let mundo3 = document.getElementById('mundo3');
let mundo4 = document.getElementById('mundo4');


function activeMundos(index){
  let span1 = document.getElementById('1')
  let span2 = document.getElementById('2')
  let span3 = document.getElementById('3')
  let span4 = document.getElementById('4')
    span1.addEventListener('click',()=>{
      mundo1.classList.add('mundo-active');
      mundo2.classList.remove('mundo-active');
      mundo3.classList.remove('mundo-active');
      mundo4.classList.remove('mundo-active');
    })  


    span2.addEventListener('click',()=>{
      mundo2.classList.add('mundo-active');
      mundo1.classList.remove('mundo-active');
      mundo3.classList.remove('mundo-active');
      mundo4.classList.remove('mundo-active');
    })  
    
    span3.addEventListener('click',()=>{
      mundo3.classList.add('mundo-active');
      mundo2.classList.remove('mundo-active');
      mundo1.classList.remove('mundo-active');
      mundo4.classList.remove('mundo-active');
    })  

    span4.addEventListener('click',()=>{
      mundo4.classList.add('mundo-active');
      mundo2.classList.remove('mundo-active');
      mundo1.classList.remove('mundo-active');
      mundo3.classList.remove('mundo-active');
    })  

}

setTimeout(function() {
  activeMundos()
}, 1000);


//   span1.addEventListener('click', ()=>{  
//     mundo1.classList.add('mundo-active');
//     mundo2.classList.remove('mundo-active');
//     mundo3.classList.remove('mundo-active');
//     mundo4.classList.remove('mundo-active');
// })



//   span2.addEventListener('click', ()=>{  
//     mundo2.classList.add('mundo-active');
//     mundo1.classList.remove('mundo-active');
//     mundo3.classList.remove('mundo-active');
//     mundo4.classList.remove('mundo-active');
// })



//   span3.addEventListener('click', ()=>{  
//     mundo3.classList.add('mundo-active');
//     mundo2.classList.remove('mundo-active');
//     mundo1.classList.remove('mundo-active');
//     mundo4.classList.remove('mundo-active');
// })



  // span4.addEventListener('click', ()=>{  
  //   mundo4.classList.add('mundo-active');
  //   mundo2.classList.remove('mundo-active');
  //   mundo1.classList.remove('mundo-active');
  //   mundo3.classList.remove('mundo-active');
  // })





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



//modal de formul??rio
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

//images

let tab1 = document.getElementById('tab-1')
let tab2 = document.getElementById('tab-2')
let tab3 = document.getElementById('tab-3')
let tab4 = document.getElementById('tab-4')

let slide1 = document.getElementById('slide1')
let slide2 = document.getElementById('slide2')
let slide3 = document.getElementById('slide3')
let slide4 = document.getElementById('slide4')


slide1.addEventListener('click', ()=>{
  tab1.classList.add('active');
  tab2.classList.remove('active');
  tab3.classList.remove('active');
  tab4.classList.remove('active');
})

slide2.addEventListener('click', ()=>{
  tab2.classList.add('active');
  tab1.classList.remove('active');
  tab3.classList.remove('active');
  tab4.classList.remove('active');
})

slide3.addEventListener('click', ()=>{
  tab3.classList.add('active');
  tab2.classList.remove('active');
  tab1.classList.remove('active');
  tab4.classList.remove('active');
})

slide4.addEventListener('click', ()=>{
  tab4.classList.add('active');
  tab2.classList.remove('active');
  tab3.classList.remove('active');
  tab1.classList.remove('active');
})