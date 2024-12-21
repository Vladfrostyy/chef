const menux = document.querySelectorAll('.header__link')
const sections = document.querySelectorAll('section')
const menuButtonn = document.querySelector(".header__drop-down")
const menun = document.querySelector(".header__menu")

menux.forEach((e, i, a) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()

        for (let i = 0; i < sections.length; i++) {
            if (e.target.id === sections[i].classList[0]) {
                menuButtonn.classList.remove("active")
                menun.classList.remove("active")

                const y = sections[i].getBoundingClientRect().top + window.scrollY - 116;

                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }
    })
})