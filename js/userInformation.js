$(document).ready(function () {
    for (let i = 0; i < 26; i++) {
        let box = $("<div class='box'></div>");
        $(".decor").append(box);
    }
});

const tickerHistory = document.querySelector('.btn2');
tickerHistory.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'vedadat.php';
});