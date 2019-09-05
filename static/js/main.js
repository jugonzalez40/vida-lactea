$(function () {
    
    // Navbar active
    $(".navbar-item").click((event) => {
        $('.navbar-item, .navbar-link').removeClass('active');
        $(event.target).addClass('active');
    });

    //Active glide
    new Glide('.glide', { autoplay: 5000}).mount()
    new Glide('.glide-testimony', { autoplay: 5000}).mount()
    //Active Scroll Animations
    AOS.init();
});