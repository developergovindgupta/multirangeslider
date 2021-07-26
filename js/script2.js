import MultiRangeSlider from './MultiRangeSlider.min.js';

const multiRangeSlider = new MultiRangeSlider();
document.querySelector('.container-2 .multi-range-slider-container').appendChild(multiRangeSlider);

// multiRangeSlider.min = 0;
// multiRangeSlider.max = 100;
// multiRangeSlider.minValue = 10;
// multiRangeSlider.maxValue = 90;
// multiRangeSlider.step = 5;
// multiRangeSlider.showRuler = true;
// multiRangeSlider.showValue = true;
// multiRangeSlider.showLabel = true;
// multiRangeSlider.preventWheel = false;

multiRangeSlider.oninput = (e) => {
	document.querySelector('.container-2 .multi-range-slider-result').innerHTML = 'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
};
document.querySelector('.container-2 .multi-range-slider-result').innerHTML = 'minValue = ' + multiRangeSlider.minValue + '<br/>maxValue = ' + multiRangeSlider.maxValue;

document.querySelector('#pre_2_html').innerText = `
	<link rel="stylesheet" href="./MultiRangeSlider/MultiRangeSlider.css" />
	

	<div class="container">
		<div class="multi-range-slider-container" style="width: 500px; margin: auto"></div>
		<br />
		<br />
		<div class="multi-range-slider-result" style="text-align: center"></div>
	</div>
	`;

document.querySelector('#pre_2_js').innerText = `
    import MultiRangeSlider from './MultiRangeSlider.min.js';

    const multiRangeSlider = new MultiRangeSlider();
    document.querySelector('.container .multi-range-slider-container').appendChild(multiRangeSlider);
    
    // multiRangeSlider.min = 0;
    // multiRangeSlider.max = 100;
    // multiRangeSlider.minValue = 10;
    // multiRangeSlider.maxValue = 90;
    // multiRangeSlider.step = 5;
    // multiRangeSlider.showRuler = true;
    // multiRangeSlider.showValue = true;
    // multiRangeSlider.showLabel = true;
    // multiRangeSlider.preventWheel = false;

    multiRangeSlider.oninput = (e) => {
        document.querySelector('.container .multi-range-slider-result').innerHTML = 
        'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
    };

    document.querySelector('.container .multi-range-slider-result').innerHTML = 
    'minValue = ' + multiRangeSlider.minValue + '<br/>maxValue = ' + multiRangeSlider.maxValue;
	`;

const multiRangeSliderBlack = new MultiRangeSlider({ baseClassName: 'multi-range-slider-black' });
document.querySelector('.container-3 .multi-range-slider-container').appendChild(multiRangeSliderBlack);
multiRangeSliderBlack.oninput = (e) => {
	document.querySelector('.container-3 .multi-range-slider-result').innerHTML = 'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
};
document.querySelector('.container-3 .multi-range-slider-result').innerHTML = 'minValue = ' + multiRangeSliderBlack.minValue + '<br/>maxValue = ' + multiRangeSliderBlack.maxValue;

document.querySelector('#pre_3_html').innerText = `
	<link rel="stylesheet" href="./MultiRangeSlider/MultiRangeSliderBlack.css" />
	

	<div class="container">
		<div class="multi-range-slider-container" style="width: 500px; margin: auto"></div>
		<br />
		<br />
		<div class="multi-range-slider-result" style="text-align: center"></div>
	</div>
	`;

document.querySelector('#pre_3_js').innerText = `
    import MultiRangeSlider from './MultiRangeSlider.min.js';

    const multiRangeSliderBlack = new MultiRangeSlider({ baseClassName: 'multi-range-slider-black' });
    document.querySelector('.container .multi-range-slider-container')
    .appendChild(multiRangeSliderBlack);
    
    
    multiRangeSliderBlack.oninput = (e) => {
        document.querySelector('.container .multi-range-slider-result').innerHTML = 
        'minValue = ' + e.minValue + '<br/>maxValue = ' + e.maxValue;
    };

    document.querySelector('.container .multi-range-slider-result').innerHTML = 
    'minValue = ' + multiRangeSliderBlack.minValue +
     '<br/>maxValue = ' + multiRangeSliderBlack.maxValue;
	`;
