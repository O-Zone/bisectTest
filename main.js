console.log('Script initiated.');

// setting up button event
var button = document.getElementById('myButton'),
    buttonHandler = function () {
        alert('You pressed me');
    };
if (button.attachEvent) {
    button.attachEvent('click', buttonHandler);
} else {
    button.addEventListener('click', buttonHandler);
}
