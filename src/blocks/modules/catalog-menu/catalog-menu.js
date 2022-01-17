import $ from "jquery";

let shadow      = $('.catalog-menu .shadow'),
    links       = $('.catalog-menu__item'),
    bodies      = $('.catalog-menu__body'),
    parent      = $('.catalog-menu'),
    activeBody,
    logo        = $('.header__logo-absolute'),
    header       = $('.header');

bodies.addClass('hidden');

links.each(function(i) {
    if (i == 0) {
        $(this).addClass('active');
        $(bodies[0]).removeClass('hidden');  
        activeBody = $(bodies[0]);      
    }
});

$('.catalog-menu__burger').on('click', function() {
    parent.toggleClass('open');
    shadow.toggleClass('hidden');
    logo.toggleClass('active');
    header.toggleClass('z1001');

    $('.catalog-menu__left-item', activeBody).each(function(i) {
        if (i == 0) {
            let itemID = $(this).data('id');
            $(this).addClass('active');

            getActiveContent(itemID, activeBody);
        }
    });

    if ($('body, html').hasClass('overflow-y')) {
        $('body, html').removeClass('overflow-y');
    } else {
        $('body, html').addClass('overflow-y');
    }
});

shadow.on('click', function() {
    parent.toggleClass('open');
    shadow.toggleClass('hidden');
    logo.toggleClass('active');
    header.toggleClass('z1001');

    if ($('body, html').hasClass('overflow-y')) {
        $('body, html').removeClass('overflow-y');
    }
});

function getActiveContent(id, wrapper) {
    let content = $('.catalog-menu__content', wrapper);

    content.addClass('hidden');

    content.each(function() {
        let contentID = $(this).data('id');

        if (contentID == id) {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });
}

$('.catalog-menu__left-item').on('click', function() {
    let itemID = $(this).data('id');

    $('.catalog-menu__left-item').removeClass('active');

    $(this).addClass('active');

    getActiveContent(itemID, activeBody);
});


$('.catalog-menu__item').on('click', function() {
    let itemID = $(this).data('id'),
        count = parseInt(itemID) - 1,
        leftItems,
        content;

    if (itemID) {
        parent.addClass('open');
        logo.addClass('active');
        header.addClass('z1001');
        shadow.removeClass('hidden');

        activeBody = $(bodies[count]);
        content = $('.catalog-menu__content', activeBody)[0];
        leftItems = $('.catalog-menu__left-item', activeBody)[0];

        $('.catalog-menu__item').removeClass('active');
        $(this).addClass('active');

        $('.catalog-menu__body').addClass('hidden');
        $(bodies[count]).removeClass('hidden');

        $('.catalog-menu__left-item').removeClass('active');
        
        $(leftItems).addClass('active');
        $(content).removeClass('hidden');

        if ($('body, html').hasClass('overflow-y')) {
            $('body, html').removeClass('overflow-y');
        } else {
            $('body, html').addClass('overflow-y');
        }
    }
});