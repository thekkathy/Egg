/* Gives focus to image when it's hovered over, loses focus when it's not */

var images = document.getElementsByClassName('img-anchor');

var image0 = images[0];
var image1 = images[1];
var image2 = images[2];
var image3 = images[3];

image0.addEventListener('mouseover', function() {
    image0.focus();
});
image0.addEventListener('mouseout', function() {
    image0.blur();
});


image1.addEventListener('mouseover', function() {
    image1.focus();
});
image1.addEventListener('mouseout', function() {
    image1.blur();
});


image2.addEventListener('mouseover', function() {
    image2.focus();
});
image2.addEventListener('mouseout', function() {
    image2.blur();
});


image3.addEventListener('mouseover', function() {
    image3.focus();
});
image3.addEventListener('mouseout', function() {
    image3.blur();
});