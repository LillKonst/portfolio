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
  





  document.addEventListener("DOMContentLoaded", () => {
    const portfolioButtons = document.querySelectorAll(".portfolio-btn");

    portfolioButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const element = document.getElementById("portfolio");
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                window.scrollTo({
                    top: elementPosition + window.scrollY - 100, // Adjust the offset as needed (-20px in this example)
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const portfolioButtons = document.querySelectorAll(".about-btn");

    portfolioButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const element = document.getElementById("about");
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                window.scrollTo({
                    top: elementPosition + window.scrollY - 100, // Adjust the offset as needed (-20px in this example)
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const portfolioButtons = document.querySelectorAll(".contact-btn");

    portfolioButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const element = document.getElementById("contact");
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                window.scrollTo({
                    top: elementPosition + window.scrollY - 100, // Adjust the offset as needed (-20px in this example)
                    behavior: "smooth"
                });
            }
        });
    });
});


