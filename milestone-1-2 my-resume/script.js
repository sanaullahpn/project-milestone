var toggleButton = document.getElementById('toggle-skils');
var cit = document.getElementById('cit');
toggleButton.addEventListener('click', function () {
    if (cit.style.display === 'none') {
        cit.style.display = 'block';
    }
    else {
        cit.style.display = 'none';
    }
});
