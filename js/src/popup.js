let togglePopup = function () {
    if ($("body").css('overflow') !== 'hidden') {
        $("body").css("overflow", "hidden");
    } else {
        $("body").css("overflow", "unset");
    }
    $(".popup-wrap").toggle();
    $(".dark-wrap").toggleClass("active");
};

let closePopup = function () {
    if ($(".popup-wrap").css('display') !== 'none') {
        togglePopup();
        $('.buying-popup .message.success').hide();
        $('.buying-popup .message.failure').hide()
    }
};

$(".item__buy-button").click(function () {
    togglePopup()
});

$(".dark-wrap").click(function () {
    closePopup()
});

$('.top-panel svg').click(function () {
    closePopup()
});

$('.buying-popup .submit').click(function () {
    let fn = $("#first-name").val();
    let ln = $("#last-name").val();
    $.ajax({
        url: "https://httpbin.org/status/200",
        success: function () {
            $('.buying-popup .message.success').toggle()
        },
        error: function () {
            $('.buying-popup .message.failure').toggle()
        }
    })
});

