$(document).ready(function() {
	init();
	function init() {
		$('#div').text("Hello World");
	}
	function onOrientationChange() {
		switch (window.orientation) {
			case -90:
				$('#div').text('landscape 90');
				break;
			case 90:
				$('#div').text('landscape -90');
				break;
			default:
				$('#div').text('portrait');
				break;
		}
	}

	window.addEventListener('orientationchange', onOrientationChange);

});