//boton modo oscuro
buttonDark.addEventListener('click', dark);

function dark() {
    body.classList.toggle('dark-mode');
    sun.classList.toggle('inactive');
    moon.classList.toggle('inactive');
    buttonDark.classList.toggle('button-dark');
    buttonDark.classList.toggle('button-light');
}