function toggleClick (event) {
    if (!event.classList.contains('active')) {
        var toggles = event.parentElement.children
        for (var i = toggles.length - 1; i >= 0; i--) {
            toggles[i].classList.remove('active');
        };
        event.classList.add('active');
    }
}