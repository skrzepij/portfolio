/**
 * @author Sniffer
 */

$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'fade',
		caption: true,
		auto: true
	});
    
    $('.nav').on('click', 'a[href="#about"]', function(ev) {
        ev.preventDefault();
        $('.content, .slider').fadeOut();
        $('.about-me').fadeIn();
    });
});
