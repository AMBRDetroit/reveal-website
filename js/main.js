$(document).ready( function() {
	const vid = document.getElementById("curtains"); 

	let website_url = prompt('Website URL to review:');

	$('.website').html('<iframe src="' + website_url + '"></iframe>');

	$('body').on('click', {}, function(evt) {
		vid.play();

		setTimeout(function() {
			window.location = website_url;
		}, 13000);
	})
});