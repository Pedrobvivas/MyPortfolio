let toggleSwitch = document.querySelector('.toggle-switch');
let body = document.body;
let modoLabel = document.querySelector('.modo');

toggleSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        modoLabel.textContent = 'Modo Claro';
    } else {
        body.classList.add('dark');
        modoLabel.textContent = 'Modo Escuro';
    }
});
