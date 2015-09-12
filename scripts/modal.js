function open_modal () {
    var modal = document.getElementsByClassName('modal');
    modal[0].style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
}
function close_modal () {
    var modal = document.getElementsByClassName('modal');
    modal[0].style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}