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