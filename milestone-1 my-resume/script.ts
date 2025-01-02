const toggleButton = document.getElementById('toggle-skils') as HTMLButtonElement;
const cit = document.getElementById('cit') as HTMLButtonElement;

toggleButton.addEventListener('click', ()=> {
    if(cit.style.display === 'none' ) {
        cit.style.display = 'block';
    } else {
        cit.style.display = 'none'
    }
});