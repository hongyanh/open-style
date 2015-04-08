function resize(obj) {
    var image = obj.children[0];
    var wrapper_width = obj.offsetWidth;
    var wrapper_height = obj.offsetHeight;
    var image_width = image.width;
    var image_height = image.height;
    if (image_width > image_height) {
        image.style.width = '100%';
        var image_height_perc = image_height / image_width * 100;
        image.style.height = image_height_perc + '%';
        var transform_top = (wrapper_height - image_height) / 2;
        image.style.transform = 'translateY(' +  transform_top + 'px)';
    } else {
        image.style.height = '100%';
        var image_width_perc = image_width / image_height * 100;
        image.style.width = image_width_perc + '%';
        var transform_left = (wrapper_width - image.width) / 2;
        image.style.transform = 'translateX(' +  transform_left + 'px)';
    }
}

function slide_left(dif) {
    if (current_image > 0) {
        for (var i = 0; i < images.length; i++) {
            var current_position = images[i].style.transform.match(/-?\d+/)[0];
            images[i].style.transform = 'translateX(' + (parseInt(current_position) + dif * 100 ) + '%)';
            images[i].style.transition = 'transform .5s linear';
        }
        for (var i = thumbs.length - 1; i > -1; i--) {
            if ( thumbs[i].classList.contains('active') ) {
                thumbs[i].className = 'thumb';
                addClassThumb = true;
            } else if (addClassThumb === true) {
                thumbs[i].className = 'thumb active';
                addClassThumb = false;
            }
        }
        document.getElementsByClassName('right')[0].style.display = "block";
        current_image -= dif;
    }
    if (current_image === 0) {
        document.getElementsByClassName('left')[0].style.display = "none";
    }
}
function slide_right(dif) {
    if (current_image < images.length-1) {
        for (var i = 0; i < images.length; i++) {
            var current_position = images[i].style.transform.match(/-?\d+/)[0];
            images[i].style.transform = 'translateX(' + (parseInt(current_position) - dif * 100 ) + '%)';
            images[i].style.transition = 'transform .5s linear';
        }
        for (var i = 0; i < thumbs.length; i++) {
            if ( thumbs[i].classList.contains('active') ) {
                thumbs[i].className = 'thumb';
                addClassThumb = true;
            } else if (addClassThumb === true) {
                thumbs[i].className = 'thumb active';
                addClassThumb = false;
            }
        }
        document.getElementsByClassName('left')[0].style.display = "block";
        current_image += dif;
    }
    if (current_image === images.length-1) {
        document.getElementsByClassName('right')[0].style.display = "none";
    }
}

function select_image(obj, num) {
    if (current_image < num) {
        slide_right(Math.abs(current_image - num));
    } else if (current_image > num) {
        slide_left(Math.abs(num - current_image));
    }
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].className = 'thumb';
    }
    obj.className = 'thumb active';
}

var images = document.getElementsByClassName('crs-img');
var current_image = 0;
var thumbs = document.getElementsByClassName('thumb');
var addClassThumb = false;
for (var i = 0; i < images.length; i++) {
    images[i].style.transform = 'translateX(' + i * 100 + '%)';
    resize(images[i]);
}
document.getElementsByClassName('left')[0].style.display = 'none';
if (thumbs.length === 1) {
    document.getElementsByClassName('right')[0].style.display = 'none';
}