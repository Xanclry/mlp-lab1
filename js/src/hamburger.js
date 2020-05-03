let toggleHamburger = function () {
    if ($("body").css('overflow') !== 'hidden') {
        $("body").css("overflow", "hidden");

    } else {
        $("body").css("overflow", "unset");
    }
    $(".dark-wrap").toggleClass("active");
    $(".hamburger-menu").toggleClass("active");
    $(".hamburger-menu__icon").toggleClass("active");
    $(".hamburger-menu_content").toggleClass("active")
};

$(".hamburger-menu__icon").click(toggleHamburger);

$(".menu__item").click(toggleHamburger);

