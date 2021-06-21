
let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}


let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})



let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.animasi-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()


let bottomNavItems = document.querySelectorAll('.mobile-navigasi-item')

let bottomMove = document.querySelector('.mobile-navigasi-animasipindah')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let crrItem = document.querySelector('.mobile-navigasi-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})