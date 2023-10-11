let navbar = document.querySelector('.navigation');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

let search = document.querySelector('.search-bar');

document.querySelector('#serch-box').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}
