document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById("menu-icon")
    const menuNav = document.getElementById("menu-nav")

    menuIcon.addEventListener('click', () => {
        menuNav.classList.toggle('nav-active')
    }) 
}) 