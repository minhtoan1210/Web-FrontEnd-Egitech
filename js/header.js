var menuItem = document.querySelectorAll('a.nav-link');
for (var i = 0; i < menuItem.length; i++) {
    console.log(menuItem[i].getAttribute("href"));
    console.log(location.pathname);
    if (menuItem[i].getAttribute("href") === location.pathname) {

        menuItem[i].classList.add("navActive");
    }
}