
//main mobile nav

let hamburger = document.querySelector(".hamburger");
let content = document.querySelector(".dropContent");

hamburger.addEventListener("click", function() {
  
  hamburger.classList.toggle("is-active");
  
  if(content.style.display === 'none'){
    content.style.display='block';
  }
  else{
    content.style.display='none';
  }
});



// ds-ham-nav
let mobileNav= document.getElementById("hammy");

mobileNav.addEventListener("click", function() {
  
    mobileNav.classList.toggle("is-active");
    
  });


  //lazy loading

  if ('loading' in HTMLImageElement.prototype) {
    //Native Lazy Loading Supported!
  
    console.log('success');
  
    const images = document.querySelectorAll('img[loading="lazy"]')
    images.forEach(img => {
        img.src = img.dataset.src;
    })
  } else {
    // Not supported!
  
    console.log('boo!')
  
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
    document.body.appendChild(script);
  }