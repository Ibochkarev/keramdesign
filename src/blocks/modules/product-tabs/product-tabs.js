$(document).ready(function() {

    // Variables
    var clickedTab = $(".product-tabs__list > ._is-active");
    var tabWrapper = $(".product-tabs__content");
    var activeTab = tabWrapper.find("._is-active");
    var activeTabHeight = activeTab.outerHeight();

    // Show tab on page load
    activeTab.show();

    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);

    $(".product-tabs__list > li").on("click", function() {

        // Remove class from active tab
        $(".product-tabs__list > li").removeClass("_is-active");

        // Add class active to clicked tab
        $(this).addClass("_is-active");

        // Update clickedTab variable
        clickedTab = $(".product-tabs__list ._is-active");

        // fade out active tab
        activeTab.fadeOut(100, function() {

            // Remove active class all tabs
            $(".product-tabs__content > li").removeClass("_is-active");

            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $(".product-tabs__content > li").eq(clickedTabIndex).addClass("_is-active");

            // update new active tab
            activeTab = $(".product-tabs__content > ._is-active");

            // Update variable
            activeTabHeight = activeTab.outerHeight();

            // Animate height of wrapper to new tab height
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 200, function() {

            // Fade in active tab
            activeTab.delay(50).fadeIn(100);
            });
        });
    });
});