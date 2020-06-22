// $(document).foundation();

var magicNumber = 0;

$(document).ready(function() {
    $('#nav .collapsed').on('click', function (e) {
        e.preventDefault();
        $('#nav .expanded').toggle();
    });
    doSizing();
    $(window).on('resize', doSizing);
    $(window).on('scroll', handleScroll);
});

function doSizing() {
    magicNumber = $('#banner').height();
    handleScroll();
}

function handleScroll(e) {
    console.log('scrolling');
    var scrollPosition = $(this).scrollTop();
    console.log(magicNumber);
    console.log(scrollPosition);
    if (scrollPosition < magicNumber) {
        $('body').removeClass('fixed-nav');
        $('#nav .expanded').show();
        $('#nav .collapsed').hide();
        setNavHeight();
    } else {
        $('body').addClass('fixed-nav');
        $('#nav .expanded').hide();
        $('#nav .collapsed').show();
        unsetNavHeight();
    }
}

function setNavHeight() {
    var menu_height = $('#nav .expanded').height();
    $('#nav').height(menu_height);
}

function unsetNavHeight() {
    $('#nav').height('inherit');
}

