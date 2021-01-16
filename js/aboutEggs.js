var images = document.getElementsByClassName('img-anchor');

var image0 = images[0];
var image1 = images[1];
var image2 = images[2];
var image3 = images[3];

/* Gives focus to image when it's hovered over, loses focus when it's not */
function changeFocusOnHover(img){
    img.addEventListener('mouseover', function(){
        img.focus();
    })
    img.addEventListener('mouseout', function() {
        img.blur();
    });
}

changeFocusOnHover(image0);
changeFocusOnHover(image1);     
changeFocusOnHover(image2);
changeFocusOnHover(image3);
