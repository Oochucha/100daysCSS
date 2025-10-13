console.log("hello")

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', function () {
        this.classList.toggle('active');
        const bars = this.querySelectorAll('div');

        bars.forEach(bar => {
            bar.classList.remove('no-animation');
        });
    });
});