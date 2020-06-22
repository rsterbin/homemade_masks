// $(document).foundation();

var NAV_SETTING_KEY = 'nav-setting';
    SETTING_FIXED = 'fixed';
    SETTING_SCROLL = 'scroll';
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
    });
    if ($('body').data(NAV_SETTING_KEY) != SETTING_FIXED) {
        $('#nav').height($('#nav .expanded').outerHeight());
    }
    handleScroll();
}

function handleScroll(e) {
    var scrollPosition = $(this).scrollTop();
    var target = scrollPosition < magicNumber ? SETTING_SCROLL : SETTING_FIXED;
    var current = $('body').data(NAV_SETTING_KEY);
    if (current != target) {
        convertNavSetting(target);
    }
}

function convertNavSetting(setting) {
    var $b = $('body'),
        $n = $('#nav'),
        $e = $n.find('.expanded'),
        $c = $n.find('.collapsed'),
        $m = $e.find('.menu');
    if (setting == SETTING_FIXED) {
        $b.addClass('fixed-nav');
        $e.hide();
        $c.show();
        $m.addClass('vertical');
        $m.removeClass('align-center');
        $n.height('inherit');
        $b.data(NAV_SETTING_KEY, SETTING_FIXED);
    } else {
        $b.removeClass('fixed-nav');
        $e.show();
        $c.hide();
        $m.removeClass('vertical');
        $m.addClass('align-center');
        $n.height($e.outerHeight());
        $b.data(NAV_SETTING_KEY, SETTING_SCROLL);
    }
}

