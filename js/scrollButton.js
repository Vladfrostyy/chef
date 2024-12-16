const scrollButton = document.querySelector(".scroll-home")
const scrollBlock = document.querySelector(".jags")

scrollButton.addEventListener("click", (e) => {
    scrollBlock.scrollIntoView({ behavior: "smooth" })
})