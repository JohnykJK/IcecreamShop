const iconMenu = document.querySelector('.burger__icon')
if (iconMenu) {
    iconMenu.addEventListener('click', function (e){
        iconMenu.classList.toggle('open');
    });
}