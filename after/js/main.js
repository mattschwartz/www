$(document).ready(function () {
	$("#after-shots").owlCarousel({
		autoPlay: 3000,
		stopOnHover: true,
		navigation: true,
		paginationSpeed: 5000,
		goToFirstSpeed: 2000,
		singleItem: true,
		autoHeight: true,
		transitionStyle: "fade",
		lazyLoad: true
	});

	$('#download').on('click', function () {

		$('a#download-at').click();
	});

	$('#platform-select').on('change', function () {
		var selectedPlatform = $('#platform-select').val();

		console.log('selected platform', selectedPlatform);

		if (selectedPlatform == 'Select a platform') {
			$('#download').addClass('disabled');
			return false;
		}

		$('#download').removeClass('disabled');

		switch (selectedPlatform) {
			case 'Windows':
				$('a#download').attr({
					target: 'hidden-iframe',
					href: './download/After_Windows.zip'
				});
				break;
			case 'Mac OSX':
				$('a#download').attr({
					target: 'hidden-iframe',
					href: './download/After_Mac.zip'
				});
				break;
			case 'Linux':
				$('a#download').attr({
					target: 'hidden-iframe',
					href: './download/After_Linux.zip'
				});
				break;
			case 'Android (.apk)':
				$('a#download').attr({
					target: 'hidden-iframe',
					href: './download/After_Android.zip'
				});
				break;
			default:
				return false;
		}
	});
});
