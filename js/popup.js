const items = document.querySelectorAll(".sale__item");
const popups = document.querySelectorAll(".popup-sale");
const body = document.querySelector("body");
const closeButton = document.querySelectorAll(".popup-sale__icon")

let canShow = true;


items.forEach((el, i) => {
    el.addEventListener("click", (e) => {
        if (canShow) {
            window.scrollTo(0, 0)
            console.log("one");
            popups[i].classList.add("active")
            body.classList.add("active")
        }
    })
})

closeButton.forEach((el, i) => {
    el.addEventListener("click", (e) => {
        canShow = false
        console.log("Pressed");
        
        popups.forEach(els => {
            els.classList.remove("active")
        })
        body.classList.remove("active")
        setInterval(() => {
            canShow = true
        }, 100);
    })
})

document.addEventListener("click", (e) => {
    popups.forEach((el) => {
        if (e.target === el) {
            canShow = false
            console.log("rwo");
            el.classList.remove("active")
            body.classList.remove("active")
            canShow = true
        }
    })
})