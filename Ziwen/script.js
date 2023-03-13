$(document).ready(function() {
    $("#magic").mouseenter(function() {
        $("#magic").slideUp(1000);
        // $(".show").hide();
        // $(".hidden").show();
    });

    $("#magic").mouseleave(function() {
        $("#magic").slideDown(1000);
        // $(".show").hide();
        // $(".hidden").show();
    });
})