document.querySelector('.navbar-toggle-button').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
});

var button = document.querySelector('.navbar-toggle-button');
var isClicked = false;

function toggleColor() {
    isClicked = !isClicked;
    if (isClicked) {
        button.classList.add('clicked');
    } else {
        button.classList.remove('clicked');
    }
}