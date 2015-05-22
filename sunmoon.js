$(document).ready(function() {
	$('#orb').click(function() {
		if($('#orb').hasClass('sun')) {
			$('#orb').removeClass('sun').addClass('sunset');
		} else if ($('#orb').hasClass('sunset')) {
			$('#orb').removeClass('sunset').addClass('moon');
		} else {
			$('#orb').removeClass('moon').addClass('sun');
		}
		if($('#sky').hasClass('day')) {
			$('#sky').removeClass('day').addClass('afternoon');
		}else if ($('#sky').hasClass('afternoon')) {
			$('#sky').removeClass('afternoon').addClass('night')
		} else {
			$('#sky').removeClass('night').addClass('day')
		}

	});

});