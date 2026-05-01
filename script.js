const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }
};