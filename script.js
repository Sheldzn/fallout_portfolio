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