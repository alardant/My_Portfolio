window.addEventListener('scroll', function () {
    var buttonUp = document.querySelector('.bi-arrow-up-circle-fill');
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-opacity');
        buttonUp.classList.add('hide-up-button');
    } else {
        header.classList.remove('header-opacity');
        buttonUp.classList.remove('hide-up-button');
    }
});

function GoBackUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

function GoBackUpButtonColor() {
    const scrollButton = document.querySelector("#scroll-top-button");
    const svgElement = scrollButton.querySelector("svg");
    const footer = document.querySelector("footer");
    const footerPosition = footer.getBoundingClientRect();

    if (footerPosition.top <= window.innerHeight) {
        svgElement.classList.add("scroll-top-footer");
        console.log("oui")
    } else {
        svgElement.classList.remove("scroll-top-footer");
    }
}

window.addEventListener("scroll", GoBackUpButtonColor);
window.addEventListener("DOMContentLoaded", GoBackUp);