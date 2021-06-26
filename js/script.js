(function () {
	const options = {
		container: document.querySelector('.MultiRangeSlider'),
	};

	const multiRangeSlider1 = new MultiRangeSlider(options);

	const multiRangeSlider2 = new MultiRangeSlider({ min: 0, max: 2, step: 0.1, showRuler: false, showValue: false, showLabel: false, preventWheel: true });
	document.body.appendChild(multiRangeSlider2);

	multiRangeSlider2.style.width = '500px';
	multiRangeSlider2.style.marginLeft = '200px';
	multiRangeSlider2.addEventListener('slidestart', function (e) {
		console.log(e);
	});
	// multiRangeSlider1.step = 1;
	// multiRangeSlider1.value_min = -40;
	// multiRangeSlider1.value_max = 80;
	// multiRangeSlider1.max = 100;
	// multiRangeSlider1.min = -20;
})();
