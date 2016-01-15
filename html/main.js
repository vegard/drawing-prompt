generate = function() {
	var p_i = Math.floor(Math.random() * probabilities[probabilities.length - 1][0][0]);
	for (i = 0; i < probabilities.length; ++i) {
		p = probabilities[i]
		if (p_i < p[0][0]) {
			s = p[1].map(function(e) {
				if (e.startsWith(":")) {
					return e.substr(1);
				}

				dataset = datasets[e];
				j = Math.floor(Math.random() * dataset.length);
				return dataset[j];
			}).join('');

			$('#idea').text(s);
			break;
		}
	}
};

$(function() {
	$('#nr_combinations').text(nr_combinations);
	generate();

	$('*').click(function() {
		generate();
	});
})
