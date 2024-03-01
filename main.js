function botaoDesativado() {
    const snackbar = document.getElementById('snackbar');
    snackbar.classList.add('show');
    setTimeout(function () { snackbar.classList.remove('show'); }, 3000);
}