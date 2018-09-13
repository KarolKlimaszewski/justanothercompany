$(function () {
    let submenu = $('.submenu');
    let menu = $('.page-nav-list__item').eq(2);
    console.log(menu)

    submenu.hide();

    menu.on('mouseover', function (e) {
        submenu.show();
    })
    menu.on('mouseout', function (e) {
        submenu.hide();
    })





})