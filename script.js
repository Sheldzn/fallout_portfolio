document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 10,
    });

    const tabButtons = document.querySelectorAll(".nav-item");

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Change Swiper slide
            swiper.slideTo(index);
        });
    });

    // Sync tabs with Swiper slide change
    swiper.on("slideChange", function () {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabButtons[swiper.activeIndex].classList.add("active");
    });
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  
  function updateMaxHeight() {
    const mainElement = document.querySelector('main'); // Get the single <main> element
    const rightContents = document.querySelectorAll('.inner-right-content'); // Get all .inner-right-content elements
  
    if (mainElement) {
      const mainHeight = mainElement.clientHeight; // Get main's height
  
      rightContents.forEach(content => {
        content.style.maxHeight = `${mainHeight}px`; // Apply height to each .inner-right-content
      });
    }
  }
  
  // Run on load and resize
  window.addEventListener('load', updateMaxHeight);
  window.addEventListener('resize', updateMaxHeight);
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let color = button.getAttribute("data-color");
            document.documentElement.style.setProperty('--active-primary-color', `var(${color})`);
            let colorClass = `color${color}`;
            if (colorClass === 'color--neon-green') {
                document.body.classList.add('neon-green');
                document.body.classList.remove('neon-blue');
                document.body.classList.remove('neon-amber');
                document.body.classList.remove('neon-white');
            } else if (colorClass === 'color--neon-blue') {
                document.body.classList.add('neon-blue');
                document.body.classList.remove('neon-green');
                document.body.classList.remove('neon-amber');
                document.body.classList.remove('neon-white');
            } else if (colorClass === 'color--neon-amber') {
                document.body.classList.add('neon-amber');
                document.body.classList.remove('neon-green');
                document.body.classList.remove('neon-blue');
                document.body.classList.remove('neon-white');
            } else if (colorClass === 'color--neon-white') {
                document.body.classList.add('neon-white');
                document.body.classList.remove('neon-green');
                document.body.classList.remove('neon-blue');
                document.body.classList.remove('neon-amber');
            }
        });
    });
});
