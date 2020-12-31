// var nav=document.querySelector('.myNav')
// var toggle=document.querySelector('.toggle')
// var btn=document.getElementsByClassName('dd-btn')
// var menu=document.getElementsByClassName('dd-menu')


// var navStatus=true;
// toggle.addEventListener('click',function(){
//   if(navStatus==true){
//     nav.style.left='0rem';
//     toggle.style.left='25rem';
//     navStatus=false;
//   }else if(navStatus==false){
//     nav.style.left='-25rem'
//     toggle.style.left='1.5rem'
//     navStatus=true
//   }
// }) 

// function reset(){
//   for(var a=0; a<menu.length; a++){
//     menu[a].classList.add('hide');
//   }
// }
// reset();

// for(let i=0;i<btn.length;i++){
//   btn[i].addEventListener('click',function(){
//     menu[i].classList.toggle('hide')
//   })
// }





(() =>{
 
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })();
  

  var sliderItem=document.querySelectorAll('.slider-item')
  var sliderLeft=document.querySelector('.slider-left')
  var sliderRight=document.querySelector('.slider-right')

  var current=0;
  function reset(){
    for(var i=0;i<sliderItem.length;i++){
      sliderItem[i].style.display='none';
    }
  }
  reset();

  function startSlider(){
    reset();
    sliderItem[0].style.display='block';

  }
  startSlider();

  function leftSlider(){
    reset();
    sliderItem[current-1].style.display='block'
    current--;
  }
  function rightSlider(){
    reset();
    sliderItem[current+1].style.display='block'
    current++;
  }

  sliderLeft.addEventListener('click',function(){
    if(current==0){
      current=sliderItem.length
    }
    leftSlider()
  })
  sliderRight.addEventListener('click',function(){
    if(current==sliderItem.length-1)
    current=-1;
    rightSlider()
  })


 