import $ from "jquery";

let header = $('.header'),
    headerHeight = $('.header').height(),
    burger = $('.header__burger'),
    windowWidth = $(window).width(),
    search = $('.header__search'),
    bottomMobile = $('.header__bottom-mobile'),
    bottomWrapper = $('.header__bottom-wrapper'),
    mobile = $('.header__mobile'),
    phone = $('.header__phone'),
    menu = $('.header__top-menu'),
    socials = $('.header__socials'),
    headerTop = $('.header__top-wrapper'),
    shadow = $('.shadow');

    console.log(headerHeight)

burger.on('click', function() {
    burgerFunc();
});

shadow.on('click', function() {
    burgerFunc();
});

function burgerFunc() {
    header.toggleClass('open');
    shadow.toggleClass('hidden');

    if ($('body, html').hasClass('overflow-y')) {
        $('body, html').removeClass('overflow-y');
    }
}

adaptiveMenu(windowWidth);

$(window).on('resize', function() {
    let widthWindow = $(window).width();

    adaptiveMenu(widthWindow);

    if (widthWindow > 991) {
        header.removeClass('open');
        shadow.addClass('hidden');
        $('body, html').removeClass('overflow-y');
    }
});

function adaptiveMenu(widthWindow) {
    switch(true) {
        case widthWindow < 991 && $('.header__search', bottomMobile).length == 0:
            bottomMobile.append(search);
            mobile.append(menu);
            mobile.append(phone);
            mobile.append(socials);
            mobile.append(menu);
        break;
        case widthWindow > 991 && $('.header__search', bottomMobile).length != 0:
            bottomWrapper.append(search);
            bottomWrapper.append(phone);
            headerTop.append(socials);
            headerTop.append(menu);
        break;
    }
}

$(window).on('scroll', function() {
    let scrollTop = $(window).scrollTop();
    let screen = $(window).width();
    let diff; 

    switch(true) {
        case screen > 991: 
            diff = 123;
        break;
        case screen < 991 && screen > 359: 
            diff = 125;
        break;
        case screen < 359: 
            diff = 120;
        break;
    }

    if (scrollTop > headerHeight) {
        header.addClass('fixed');
        $('main').css('margin-top', diff);
    } else {
        header.removeClass('fixed');
        $('main').css('margin-top', '0');
    }
});
