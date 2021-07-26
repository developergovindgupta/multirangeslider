(function () {
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//BEGIN Method - 1
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	let onInitMultiRangeSlider = function (e) {
		document.querySelector('.container .multi-range-slider-result').innerHTML = 'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
	};

	let onInputMultiRangeSlider = function (e) {
		document.querySelector('.container .multi-range-slider-result').innerHTML = 'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
	};

	let options = {
		container: document.querySelector('.container .multi-range-slider-container'), // target container element where it append
		id: 'MultiRangeSlider1', //set id attribute if passed value else unset
		baseClassName: '', // prefix of class names of all elements of range slider default "multi-range-slider" set if you want to change theme style.
		min: 0, // slider min value default is 0
		max: 100, // slider max value default is 100
		step: 5, // slider step value default is ((max - min) / 20)=5
		value_min: 25, // slider selected min value default is ((max - min) * 0.25)
		value_max: 75, // slider selected max value default is ((max - min) * 0.75)
		showRuler: true, // is ruler visible or not default is true
		showValue: true, // is selected min and max value label shows or not default true
		showLabel: true, // is slider min and max value shows or not default true
		preventWheel: false, // is slider move with mouse wheel default is false
		oninit: onInitMultiRangeSlider, // eventHandlerFunction trigger when control is created by constructor.
		onbarclick: null, // eventHandlerFunction trigger when control's bar clicked.
		oninput: onInputMultiRangeSlider, // eventHandlerFunction trigger when control's value change by user.
		onchange: null, // eventHandlerFunction trigger when control's value change by user or JavaScript.
		onslidestart: null, // eventHandlerFunction trigger when thumb is start sliding by user.
		onslide: null, // eventHandlerFunction triggers continuously till the thumb is sliding by user. also trigger when user click on bar.
		onslideend: null, // eventHandlerFunction trigger when thumb is stop sliding by user.
	};
	const multiRangeSlider1 = new MultiRangeSlider(options);
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//END Method - 1
	//////////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//BEGIN Method - 2
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	// const multiRangeSlider2 = new MultiRangeSlider();
	// document.querySelector('.container-2 .multi-range-slider-container').appendChild(multiRangeSlider2);

	// multiRangeSlider2.style.maxWidth = '500px';
	// multiRangeSlider2.style.margin = 'auto';
	// multiRangeSlider2.addEventListener('slidestart', function (e) {
	// 	console.log(e);
	// });
	// multiRangeSlider2.id = 'multiRangeSlider2';
	// multiRangeSlider1.step = 1;
	// multiRangeSlider1.value_min = -40;
	// multiRangeSlider1.value_max = 80;
	// multiRangeSlider1.max = 100;
	// multiRangeSlider1.min = -20;

	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//END Method - 2
	//////////////////////////////////////////////////////////////////////////////////////////////////////////

	document.querySelector('#pre_1_html').innerText = `
	<link rel="stylesheet" href="./MultiRangeSlider/MultiRangeSlider2.css" />
	<script src="./MultiRangeSlider/MultiRangeSlider.js"></script>



	<div class="container">
		<div class="multi-range-slider-container" style="width: 500px; margin: auto"></div>
		<br />
		<br />
		<div class="multi-range-slider-result" style="text-align: center"></div>
	</div>
	`;
	document.querySelector('#pre_1_js').innerText = `
	let onInitMultiRangeSlider = function (e) {
		document.querySelector('.multi-range-slider-result').innerHTML = 
		'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
	};

	let onInputMultiRangeSlider = function (e) {
		document.querySelector('.multi-range-slider-result').innerHTML = 
		'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
	};

	let options = {
		container: document.querySelector('.multi-range-slider-container'), 
		id: 'MultiRangeSlider1', 
		baseClassName: '', 
		min: 0, 
		max: 100, 
		step: 5, 
		value_min: 25, 
		value_max: 75, 
		showRuler: true, 
		showValue: true, 
		showLabel: true, 
		preventWheel: false, 
		oninit: onInitMultiRangeSlider, 
		onbarclick: null, 
		oninput: onInputMultiRangeSlider, 
		onchange: null, 
		onslidestart: null, 
		onslide: null, 
		onslideend: null, 
	};
	const multiRangeSlider1 = new MultiRangeSlider(options);
	`;
})();
