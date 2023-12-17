document.querySelector(".hamburger-menu").addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    positionMenu(); // Trigger position update on menu toggle
  });
  
  window.addEventListener('scroll', () => {
    const header = document.querySelector(".hamburger-menu");
    
    if (window.scrollY > 0) {
      header.classList.add("sticky");
      positionMenu(); // Update menu position on scroll
    } else {
      header.classList.remove("sticky");
    }
  });
  
  // Code for header on desktop 

  function toggleHeaderOnScroll() {
    const header = document.querySelector("header");
  
    if (window.innerWidth > 1000) { // Adjust this width according to your desktop breakpoint
      if (window.scrollY > 0) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    }
  }
  
  window.addEventListener('scroll', () => {
    toggleHeaderOnScroll();
  });
  
  window.addEventListener('resize', () => {
    toggleHeaderOnScroll();
  });
  
  // Initialize the behavior on page load
  toggleHeaderOnScroll();
  





  
  const portfolio = document.querySelector('.project__container');
portfolio.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const aboutMe = document.querySelector('.about-me');
aboutMe.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});