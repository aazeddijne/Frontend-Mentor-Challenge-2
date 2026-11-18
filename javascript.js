const open = document.querySelector('.opened');
const opened = document.querySelector('.open');

const opens = document.querySelector('.opens');
const menu = document.querySelector('.menu');

const bright1 = document.querySelector('.bright1');
const bright2 = document.querySelector('.bright2');
const bright3 = document.querySelector('.bright3');
const bright4 = document.querySelector('.bright4');
const bright5 = document.querySelector('.bright5');
const bright6 = document.querySelector('.bright6');
const bright7 = document.querySelector('.bright7');


const dark = document.querySelector('.dark');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

open.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        opened.src = './images/close-circle-svgrepo-com.svg';
    } else {
        opened.src = './images/language-translate-svgrepo-com.svg';
    }
});


function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');

        body.style.background = "hsl(234, 60%, 10%)";
        footer.style.background = "hsl(234, 52%, 12%)";
        footer.style.color = "white";

        bright1.style.filter = "brightness(0) invert(0.4)";
        bright2.style.filter = "brightness(0) invert(0.4)";
        bright3.style.filter = "brightness(0) invert(0.4)";
        bright4.style.filter = "brightness(0) invert(1)";
        bright5.style.filter = "brightness(0) invert(1)";
        bright6.style.filter = "brightness(0) invert(0.7)";
        bright7.style.filter = "brightness(0) invert(0.7)";

        opens.src = './images/dark-svgrepo-com.svg';

    } else {
        body.classList.remove('dark-mode');
        footer.style.background = "";
        footer.style.color = ""

        body.style.background = "";

        bright1.style.filter = "";
        bright2.style.filter = "";
        bright3.style.filter = "";
        bright4.style.filter = "";
        bright5.style.filter = "";
        bright6.style.filter = "";
        bright7.style.filter = "";

        opens.src = './images/dark-mode-night-moon-svgrepo-com.svg';
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

dark.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';

    applyTheme(newTheme);

    localStorage.setItem('theme', newTheme);
});