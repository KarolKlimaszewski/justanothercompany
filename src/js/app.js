$(function () {
    let submenu = $('.submenu');
    let submenuList = $('.page-nav-list__item').eq(2);
    let menu = $('.page-nav-list');

    submenuList.on('mouseover', function (e) {
        submenu.show();
    })
    submenuList.on('mouseout', function (e) {
        submenu.hide();
    })

    let menuBurger = $('.page-nav__button');

    menuBurger.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass("open");
    })

    let leftButton = $('.slider__prev');
    let rightButton = $('.slider__next');
    let allSlides = $('.slider-list__item');
    let counter = 0;

    rightButton.on("click", function (e) {
        e.preventDefault();
        console.log(allSlides);
        allSlides.eq(counter).toggleClass("slider-list__item--visible");
        if(counter < allSlides.length - 1 ? counter++ : counter = 0);
        allSlides.eq(counter).toggleClass("slider-list__item--visible");
    })
    leftButton.on("click", function (e) {
        e.preventDefault();
        console.log(allSlides);
        allSlides.eq(counter).toggleClass("slider-list__item--visible");
        if(counter === 0 ? counter = allSlides.length - 1 : counter--)
        allSlides.eq(counter).toggleClass("slider-list__item--visible");
    })







})