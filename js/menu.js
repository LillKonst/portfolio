document.querySelector(".hamburger-menu").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
  });

  
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