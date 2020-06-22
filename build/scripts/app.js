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
    $('.valign-middle').each(function () {
        var ph = $(this).parent().innerHeight(),
            ch = $(this).innerHeight();
        var padding = null;
        if (ph > 0 && ch > 0) {
            padding = Math.round((ph/2) - (ch/2)) + 'px';
        } else {
            padding = $(this).attr('rel');
        }
        $(this).css('paddingTop', padding);
        console.log('valign-middle', {
            el: $(this),
            parentHeight: ph,
            childHeight: ch,
            padding: padding
        });
    });
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

