var images = document.getElementsByClassName('crs-img');
var current_image = 0;
(function() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.transform = 'translateX(' + i * 100 + '%)';
    };
    document.getElementsByClassName('left')[0].style.display = "none";
})();
function slide_left() {
    if (current_image > 0) {
        for (var i = 0; i < images.length; i++) {
            var current_position = images[i].style.transform.match(/-?\d+/)[0];
            images[i].style.transform = 'translateX(' + (parseInt(current_position) + 100 ) + '%)';
            images[i].style.transition = 'transform .5s linear';
        };
        document.getElementsByClassName('right')[0].style.display = "block";
        current_image--;
    }
    if (current_image === 0) {
        document.getElementsByClassName('left')[0].style.display = "none";
    }
}
function slide_right() {
    if (current_image < images.length-1) {
        for (var i = 0; i < images.length; i++) {
            var current_position = images[i].style.transform.match(/-?\d+/)[0];
            images[i].style.transform = 'translateX(' + (parseInt(current_position) - 100 ) + '%)';
            images[i].style.transition = 'transform .5s linear';
        };
        document.getElementsByClassName('left')[0].style.display = "block";
        current_image++;
    }
    if (current_image === images.length-1) {
        document.getElementsByClassName('right')[0].style.display = "none";
    }
}