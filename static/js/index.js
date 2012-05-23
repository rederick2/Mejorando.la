jQuery(function ($) {
	// elementos que cambiaran
	var $dias, $horas, $minutos, $hora, nextEpisode = $('#proximo').attr('timestamp');

	// si es el "home" (donde este el #proximo)
	if(nextEpisode) {
		nextEpisode = parseInt(nextEpisode);

		// los elementos que cambiaran

		// contador
		$dias 	 = $('#nextday');
		$horas 	 = $('#nexthour');
		$minutos = $('#nextmin');

		// horario del programa
		$hora 	 = $('#hora');

		// cada minuto
		+function updateCounter(){
			var elapsed = nextEpisode - new Date(), // puede ser Date.now() pero iexplorer8 no lo reconoce
	                  d = new Date(nextEpisode);

	        // horario del programa
			$hora.text(d.toString("h:mmtt"));

			if(elapsed < 0) return; // detenemos el contador;

			// calcular los dias, horas y minutos que faltan
			var days 	= Math.floor(elapsed/1000/60/60/24),
			    hours 	= Math.floor(elapsed/1000/60/60) % 24,
			    minutes = Math.floor(elapsed/1000/60) % 60;

			$dias.text(days), $horas.text(hours), $minutos.text(minutes);

			setTimeout(arguments.callee, 60100 - (new Date() % 60000)); // callee esta obsoleto y deberia llamarse por el nombre;
												// en este caso updateCounter, pero iexplorer8 no reconoce;
												// este tipo de declaracion de funcion;
		}();

		function formatNumber(rep) {
			rep = rep + ''; // coerce to string
			if (rep < 1000) {
				return rep; // return the same number
			} else if (rep < 5000) { // place a comma between
				return rep.charAt(0) + ',' + rep.substring(1);
			} else { // divide and format
				return (rep/1000).toFixed(rep % 1000 != 0)+'k';
			}
		}

		(function youtubeCounter(){
			// youtube video views
			var count = $.cookie('youtube_views');
			var $youtube = $('.btn_youtube');
			if (count) {
				$youtube.find('.count').text(count);
			} else {
				$.getJSON('http://gdata.youtube.com/feeds/api/users/' + $youtube.data('id') + '?alt=json&callback=?', function(data){ 
					var count = formatNumber(data.entry['yt$statistics'].subscriberCount);
					$.cookie('youtube_views', count);
					$youtube.find('.count').text(count);
				});
			}
		})();
	}
});
