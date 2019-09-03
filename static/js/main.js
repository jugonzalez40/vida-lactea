new Glide('.glide').mount()





//Scrol 

$(document).scroll(() => refixNavbar());


function refixNavbar () {
    if(window.pageYOffset >= 1){
        $(".navbar").addClass("down");
    } else {
        $(".navbar").removeClass("down");
    }
}



$(function(){
    refixNavbar();
    $(".navbar-item").click((event)=> {
        $('.navbar-item').removeClass('active');
        $(event.target).addClass('active');
    });
});