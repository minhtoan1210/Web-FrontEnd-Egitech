// $(document).on('click', 'ul li', function() {
//     // $(this).addClass('active').siblings().removeClass('active')
//     console.log("abc")
// })

// const currentLocation = location.href;
const menuItem = document.querySelectorAll('a.nav-link');
// const menuLength = menuItem.length
for (let i = 0; i < menuItem.length; i++) {
    if (menuItem[i].getAttribute("href") === location.pathname) {
        menuItem.classList.add("active");
    }
}