


function refixNavbar () {
    if(window.pageYOffset >= 24){
        $(".navbar").addClass("down");
    } else {
        $(".navbar").removeClass("down");
    }
}
$(document).scroll(() => refixNavbar());
$(() => {
    refixNavbar();

    // Navbar active
    $(".navbar-item").click((event) => {
        $('.navbar-item, .navbar-link').removeClass('is-active');
        $(event.target).addClass('is-active');
    });

    //Active glide
    // new Glide('.glide', { autoplay: 5000 }).mount()
    // new Glide('.glide-testimony', { autoplay: 5000 }).mount()
    //Active Scroll Animations
    
    AOS.init({
        once: true
    });

    const burger = document.querySelector('.burger');
    const nav = document.querySelector(`#${burger.dataset.target}`);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    // var selector = document.getElementById("phone-contact");

    // var im = new Inputmask("99-9999999");
    // im.mask(selector);

    //new fullpage('#fullPage')
});
