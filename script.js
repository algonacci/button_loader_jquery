$(document).ready(function() {
    $(".btn").click(function() {
        $(this).addClass("loader");

        setTimeout(function() {
            $(".btn").removeClass("loader");
        }, 2000);
    })
});