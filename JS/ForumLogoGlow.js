$(document).ready(function() {
    $(".NavBarLogo").hover(function() {
        $(this).animate({ opacity: 0.5 }, 500).animate({ opacity: 1 }, 500);
    });
});