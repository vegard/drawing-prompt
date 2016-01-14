generate = function() {
	var combination_i = Math.floor(Math.random() * nr_combinations);
	for (i = 0; i < probabilities.length; ++i) {
		p = probabilities[i]

		if (combination_i < p[0]) {
			s = p[1].map(function(e) {
				if (e.startsWith(":")) {
					return e.substr(1);
				}

				dataset = datasets[e];
				j = Math.floor(Math.random() * dataset.length);
				return dataset[j];
			}).join('');

			$('#idea').text('#' + combination_i + ': ' + s);
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
