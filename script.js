window.onload = function() {
    const heightPoint = 30;
    const ElHeader = document.getElementById("header");
    const scroll_event = function() {
        if (window.pageYOffset > heightPoint && !ElHeader.classList.contains("scroll")) {
            ElHeader.classList.add("scroll");
        } else if (window.pageYOffset < heightPoint && ElHeader.classList.contains("scroll")) {
            ElHeader.classList.remove("scroll");
        }
    }
    window.addEventListener('scroll', scroll_event);
}