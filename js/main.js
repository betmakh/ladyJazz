$(function(){
	feedbackResize ();

	$('.popup').on( "click", function (event){
        var t=event.target||event.srcElement;
        if(t.className != "popup") return;
        hidePopup();
    });

    $('#button').on('click', showPopup);

	$('.offers').hover(function(){
		$('.offers').addClass('active');
	}, function(){
		$('.offers').removeClass('active');
	})

	// slider
	var numOfSlides = $('.slider-buttons').find('label').length,
		slideInterval = 3000,
		currentSlide = 1;

	var autoplay = function(){
        if(currentSlide < numOfSlides) {
            ++currentSlide;
        }            
        else {
            currentSlide = 1;
        }
    
        var button = '#button-' + currentSlide;
        $(button).prop("checked", true);
    }
    $(".slider-buttons label").on('click', function (){
        clearInterval(autosliding);
        currentSlide = $(this).attr('for').substring(7, 8);
        console.log(currentSlide);
        autosliding = setInterval(autoplay, slideInterval);
    })
    
    var autosliding = setInterval(autoplay ,slideInterval);
});

function showPopup () {
	$('.popup').show();	
}
function hidePopup () {
	$('.popup').hide();	
}

window.onresize = feedbackResize;

function feedbackResize () {
	var max = 100;
	$('.feedback').attr('style','');

	$('.feedback').each(function(index,element){
		if ($(element).height() > max) {
			max = $(element).height();
		}
	});

	$('.feedback').css('height', (max+10)+'px');

}

function sliderAutoSliding () {
	var numOfSlides = $('.slider-buttons').children.length,
		slideInterval = 3000;


}