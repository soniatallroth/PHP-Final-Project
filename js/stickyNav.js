// sticky navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 75) {
        $(".header-logo").addClass("active");
        $("nav").addClass("active");
        $(".navlinks").addClass("active");
    } else {
        $(".header-logo").removeClass("active");
        $("nav").removeClass("active");
        $(".navlinks").removeClass("active");
    }
});
