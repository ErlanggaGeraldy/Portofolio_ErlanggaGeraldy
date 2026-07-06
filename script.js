$(document).ready(function() {
    // Sticky Navbar & Scroll Up Button Logic
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Smooth Scroll to Top
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // Typed.js Animation (Fixed trailing spaces)
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "UI/UX Designer", "System Analyst", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Web Developer", "UI/UX Designer", "System Analyst", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Mobile Menu Toggle
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-bars").toggleClass("fa-times");
    });

    // Close mobile menu when a link is clicked
    $('.navbar .menu li a').click(function() {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
    });

    // Owl Carousel (Fixed configuration typos)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,          // Fixed: was autoplayTimeOut
        autoplayHoverPause: true,       // Fixed: was autoplayHoverPauser
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});