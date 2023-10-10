const navbarItems =  document.querySelectorAll('.nav-link');


navbarItems.forEach(item => {
  item.addEventListener('click', () => {
      // Remove active class from all navbar items
      navbarItems.forEach(navItem => {
          navItem.classList.remove('active');
      });

      // Add active class to the clicked navbar item
      item.classList.add('active');
  });
});



const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("close");
let menuButton = document.getElementById("btn");


menuButton.addEventListener("click",()=>{
  if(menuIcon.style.display == "none"){
    menuIcon.style.display = "inline";
    closeIcon.style.display ="none"
  }else{
    menuIcon.style.display = "none"
    closeIcon.style.display = "inline";
    closeIcon.classList.add("active");

  }
})

// sticky header
const headersticky = document.querySelector("header");
const boxshadow = document.getElementsByClassName(".header-wrap")
let isSticky = false;
const scrollbar=()=>{
  const scrollY = window.scrollY || window.pageYOffset;
  if(scrollY > 0 && !isSticky && scrollY > headersticky.scrollHeight){
    headersticky.classList.add("sticky")
    isSticky = true;
  }else if(scrollY === 0 && isSticky){
    headersticky.classList.remove("sticky")
    isSticky=false;
    boxshadow .style.boxShadow="none"
  }
}

window.addEventListener("scroll",scrollbar);

scrollbar()




// count up animation

function startCountUp(element, target, duration) {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  }
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const countUpElements = document.querySelectorAll('.count');
    
    countUpElements.forEach((element) => {
      if (isInViewport(element) && !element.classList.contains('counted')) {
        const targetCount = parseInt(element.getAttribute('data-to'), 10);
        startCountUp(element, targetCount, 1000); 
        element.classList.add('counted');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  
  handleScroll();


  
// scroll up animation;

const y =document.getElementById("scrollTop");

    y.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    })

    window.addEventListener("scroll",()=>{
        if(window.scrollY > 300){
            y.style.display="block"
         
        }else{
            y.style.display="none";
           
        }
    })



    // carousel functions in js




    const controls = document.querySelectorAll('.testimonial-carousel.testimonial-3 .controls li img');
    const interval = 2500;
    let activeIndex = 1; 
    
  


    controls[1].style.opacity = '1';

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
  
        controls.forEach((c) => {
            c.style.opacity = '0.6';
        });

 
        control.classList.add('active');
        control.style.opacity = '1';

     
    });
});



    controls[activeIndex].style.opacity = '1';
    
  
    function changeActiveControl() {
        controls.forEach((control) => {
            control.style.opacity = '0.6';
        });
    
        activeIndex = (activeIndex + 1) % controls.length;
        controls[activeIndex].style.opacity = '1';
    }
    
     let intervalId = setInterval(changeActiveControl, interval);
    
    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
           
            clearInterval(intervalId);
    
          
            controls.forEach((c) => {
                c.style.opacity = '0.6';
            });
    
           
            control.style.opacity = '1';
    
           
            activeIndex = index;
    
          
            intervalId = setInterval(changeActiveControl, interval);
        });
    });




  







