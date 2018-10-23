window.webapp = {};
window.webapp = {
	getUrlParameterByName : function(name) {
		var url = window.location.search;
		var name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if(!results || !results[2]) {
			return "";
		}
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	},
	iframeLoaded : function() {
		setTimeout(function() {
			$('.loading-website').fadeOut(1000);
			
			$('body').on('click', {}, function(evt) {
				vid.play();
		
				setTimeout(function() {
					window.location = website_url;
				}, 13000);
			});
		},1500);
	}
}

const vid = document.getElementById("curtains");
let website_url = webapp.getUrlParameterByName('url');

$(document).ready( function() {
	
	if(website_url=='') {
		website_url = prompt('Website URL to reveal:');
	} else {
		website_url += window.location.hash;
	}
	
	if(website_url=='' || website_url == null) {
		window.location.reload();
	}
	
	$('.loading-website').show();	

	$('.website').html('<iframe src="' + website_url + '" onLoad="window.webapp.iframeLoaded();"></iframe>');
});