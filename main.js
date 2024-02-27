let toggleSwitch = document.querySelector('.toggle-switch');
let body = document.body;

toggleSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
});
