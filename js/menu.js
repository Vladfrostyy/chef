const menu = document.querySelector(".header__drop-down");
const menuButton = document.querySelector(".header__menu");

menuButton.addEventListener("click", (e) => {
    menuButton.classList.toggle("active")
    menu.classList.toggle("active")
});

if (menu.classList.contains("active")) {
    document.addEventListener("click", (e) => {
        if (e.target !== menu) {
            menuButton.classList.remove("active")
            menu.classList.remove("active")
        }
    })
}