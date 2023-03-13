$(document).ready(function() {
    $("#magic").mouseenter(function() {
        $("#magic").slideUp(3000);
    });

    $("#magic").mouseleave(function() {
        $("#magic").slideDown(3000);
    });

    $("#magic").click(function() {
        $(this).hide();
        $(".show").hide();
        $(".main_title").css("background-color", "rgba(255, 255, 255, 0)");
        $("*").css("background-color", "#9932cc").ready(function() {});
        $("hr").hidden
    });
})