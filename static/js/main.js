new Glide('.glide').mount()





//Scrol 

$(document).scroll(() => refixNavbar());


function refixNavbar () {
    if(window.pageYOffset >= 103){
        $(".navbar").addClass("is-fixed-top");
    } else {
        $(".navbar").removeClass("is-fixed-top");
    }
}



$(function(){
    refixNavbar();
    $(".navbar-item").click((event)=> {
        $('.navbar-item').removeClass('active');
        $(event.target).addClass('active');
    });
});