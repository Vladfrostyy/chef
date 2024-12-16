const animItems = document.querySelectorAll('._anim-item')

if (animItems.length > 0) {
    window.addEventListener('scroll', animONscroll)
    function animONscroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animHeight = animItem.offsetHeight
            const animOffset = offset(animItem).top
            const animStart = 4
            
            let animPoint = window.innerHeight - animHeight / animStart
            if (animHeight > window.innerHeight) {
                animPoint = window.innerHeight - window.innerHeight / animStart
            }
            
            if ((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset + animHeight)) {
                animItem.classList.add('actives')
            } else {
                if (!animItem.classList.contains('_no-anim')) {
                    animItem.classList.remove('actives')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animONscroll()
    }, 300);
}