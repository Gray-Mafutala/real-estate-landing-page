// To display the menu links
const menu_links = document.querySelector('.header__menu__links');
const menuIcon = document.querySelector('.header__menu__hamburger-icon');
menuIcon.addEventListener('click', () => {
    if (menu_links.style.display === 'flex') {
        menu_links.style.display = 'none';
        menuIcon.src = "./assets/img/humburger-menu.svg";
    }
    else {
        menu_links.style.display = 'flex';
        menuIcon.src = "./assets/img/close-menu-links.svg";
    }
});

window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 840) {

        menu_links.style.display = 'flex';
        menuIcon.src = "./assets/img/humburger-menu.svg";
    }
    else {
        menu_links.style.display = 'none';
        menuIcon.src = "./assets/img/humburger-menu.svg";
    }
});