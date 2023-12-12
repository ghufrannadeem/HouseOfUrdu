$(function(){
    AOS.init({
        once: true,
    });

        // Menu Function
        $('#nav-icon4').click(function(){
            $("header").toggleClass('open');
            $('.mainMenu').toggleClass('activeMenu');
        });
});