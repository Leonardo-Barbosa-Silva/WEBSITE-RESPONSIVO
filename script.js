function btnMobile() {
    var menuMobile = document.querySelector('.menu-mobile').style.display
    if (menuMobile == 'none') {
        menuMobile = document.querySelector('.menu-mobile').style.display = 'block'
    } else {
        menuMobile = document.querySelector('.menu-mobile').style.display = 'none'
    }
}