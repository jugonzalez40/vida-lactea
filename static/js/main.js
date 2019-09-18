$(function() {

    // Navbar active
    $(".navbar-item").click((event) => {
        $('.navbar-item, .navbar-link').removeClass('is-active');
        $(event.target).addClass('is-active');
    });

    //Active glide
    new Glide('.glide', { autoplay: 5000 }).mount()
    new Glide('.glide-testimony', { autoplay: 5000 }).mount()
    //Active Scroll Animations
    AOS.init();

    const burger = document.querySelector('.burger');
    const nav = document.querySelector(`#${burger.dataset.target}`);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

});
