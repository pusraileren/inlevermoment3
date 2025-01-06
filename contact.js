let formulier = document.getElementById('form');
let container = document.querySelector('.contact-container');

formulier.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = '<p>Bedankt voor je bericht. <br /> Ik neem snel contact met je op.</p>';
});

let zwevende_knop = document.querySelector('.floating-btn');
let sluit_knop = document.querySelector('.close-btn');
let sociale_panel_container = document.querySelector('.social-panel-container');

zwevende_knop.addEventListener('click', () => {
    sociale_panel_container.classList.toggle('zichtbaar');
});

sluit_knop.addEventListener('click', () => {
    sociale_panel_container.classList.remove('zichtbaar');
});
