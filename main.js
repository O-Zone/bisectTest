console.log('Script initiated.');

// setting up button event
var button = document.getElementById('myButton');
if (button.attachEvent) {
    button.attachEvent('click', function () {
        alert('Du trykkede på knappen');
    });
} else {
    button.addEventListener('click', function(e) {
        alert('Du trykkede på knappen');
    });
}
