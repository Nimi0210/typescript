var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');
var calsi = /** @class */ (function () {
    function calsi(buttons, display) {
        buttons.forEach(function (button) {
            button.addEventListener('click', calculate);
        });
    }
    return calsi;
}());
function calculate(event) {
    var clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    }
    else if (clickedButtonValue === 'C') {
        display.value = '';
    }
    else {
        display.value += clickedButtonValue;
    }
}
var st1 = new calsi(buttons, display);
