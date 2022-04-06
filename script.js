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

    const ElNav = document.getElementById("nav");
    const ElNavButtom = document.getElementById("nav-button");
    const nav_open_event = function() {
        if (ElNav.classList.contains("open")) {
            ElNav.classList.remove("open");
        } else {
            ElNav.classList.add("open");
        }
    }
    ElNavButtom.addEventListener("click", nav_open_event)
}