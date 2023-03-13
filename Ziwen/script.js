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

    $("#magic").click(function() {
        $(this).hide();
        $(".show").hide();
        $(".main_title").css("background-color", "rgba(255, 255, 255, 0)");
        $("*").css("background-color", "#9932cc").ready(function() {
            // $("*").css({ "animation": "animateColor 4s linear infinite" });
            setTimeout(() => $("*").css({ "animation": "animateColor 4s linear infinite" }), "10000");
        });
        // $(".hidden").show();
    });
})