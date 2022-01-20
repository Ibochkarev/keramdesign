import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import ionRangeSlider from "ion-rangeslider";

$('.sidebar-filter__dropdown-subcategory input').on('click', function() {
    let parent = $(this).parent();

    parent.toggleClass('chosen');
});

$('.sidebar-filter__dropdown-top').on('click', function() {
    let parent = $(this).parent();

    parent.toggleClass('open');
});

$("#range").ionRangeSlider({
    type: "double",
    min: 2,
    max: 75,
    from: 0,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
    onStart: function (data) {
        $('.sidebar-filter__price-min input').val(data.from);
        $('.sidebar-filter__price-max input').val(data.to);
    },
    onChange: function (data) {
        $('.sidebar-filter__price-min input').val(data.from);
        $('.sidebar-filter__price-max input').val(data.to);
    }
});
