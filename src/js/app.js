var image = [
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg',
    '../img/5.jpg',
];

$('.box').each(function(i, obj) {
    $('.box-image-' + (i + 1)).css({
        'background': 'url(' + image[i] + ') no-repeat center center',
        'background-size': 'cover',
        'height': '250px'
    });
});

var d = new Date();
$('#date').html(d.getFullYear());

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
        $(".navbar").css({
            'background': 'rgba(233, 37, 247, 0.414)',
            'transition': '1s',
            '-webkit-box-shadow': '1px 3px 3px 3px rgba(0,0,0,0.1)',
            'box-shadow': '1px 3px 3px 3px rgba(0,0,0,0.1)',
            'font-size': '1em',
            'padding': '10px 0px 10px 0px'
        });
    } else {
        $(".navbar").css({
            'background': 'transparent',
            'transition': '1s',
            '-webkit-box-shadow': 'none',
            'box-shadow': 'none',
            'font-size': '1.2em',
            'padding': '0px 0px 20px 0px'
        });
    }
});