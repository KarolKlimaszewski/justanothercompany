$(function () {
    let submenu = $('.submenu');
    let menu = $('.page-nav-list__item').eq(2);
    submenu.hide();

    menu.on('mouseover', function (e) {
        submenu.show();
    })
    menu.on('mouseout', function (e) {
        submenu.hide();
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