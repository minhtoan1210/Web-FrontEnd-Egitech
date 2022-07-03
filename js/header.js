var menuItem = document.querySelectorAll('a.nav-link');
for (var i = 0; i < menuItem.length; i++) {
    if (menuItem[i].getAttribute("href") === location.pathname) {
        menuItem[i].classList.add("active");
    }
}