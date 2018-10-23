window.webapp = {};
window.webapp.func = {
	getUrlParameterByName : function(name) {
		var url = window.location.search;
		var name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if(!results || !results[2]) {
			return "";
		}
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
}

$(document).ready( function() {
	let website_url = webapp.func.getUrlParameterByName('url');
	
	if(website_url=='') {
		website_url = prompt('Website URL to reveal:');
	}
	
	if(website_url=='' || website_url == null) {
		window.location.reload();
	}
	
	const vid = document.getElementById("curtains");  

	$('.website').html('<iframe src="' + website_url + '"></iframe>');

	$('body').on('click', {}, function(evt) {
		vid.play();

		setTimeout(function() {
			window.location = website_url;
		}, 13000);
	})
});