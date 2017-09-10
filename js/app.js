$( document ).ready(function() {

    /* Menu */
    $('#menu').click(function (e) {
       $('#menu-list').toggle("slow");
    });

    /* Carousel */
    var value;
    $( ".slider-btn" ).click(function(e) {
        e.preventDefault();
        e.returnValue = false;
        $(".active").removeClass("active");
        $(".selected").removeClass("selected");
        value = $(this).data('value');
        console.log($(this).data('value'));
        $(".slider-"+value).addClass("active");
        $(this).addClass("selected");
    });
});