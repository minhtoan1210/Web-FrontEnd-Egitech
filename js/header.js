var menuItem = document.querySelectorAll('a.nav-link');
for (var i = 0; i < menuItem.length; i++) {
    console.log(menuItem[i].getAttribute("href"));
    console.log(location.pathname);
    if (menuItem[i].getAttribute("href") === location.pathname) {
        console.log("ok")
        menuItem[i].classList.add("active");
    }
}
console.log("sadasd");