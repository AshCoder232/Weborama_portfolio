const hamburgerButton = document.getElementsByClassName('hamburger')
const navList = document.getElementsByClassName('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)