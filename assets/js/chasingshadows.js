$(document).ready(function(){
	$("#obscurer").on("click", function() {
		$('#welcomeSplashDiv').fadeOut(500, function() {
			$('#welcomeSplashDiv').remove();
		$('#obscurer').remove();
		});
	});
	$(".galleryCover").fadeTo(0, 0.6);
	$(".galleryTitle").fadeTo(0, 0);
	$(".galleryCover").hover(function() {
		$(this).fadeTo(500, 1);
		$(this).children(":first").fadeTo(500, 1);
	}, function() {
		$(this).fadeTo(500, 0.6);
		$(this).children(":first").fadeTo(500, 0);
	});
});

