document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    function flipPage() {
        if (currentPage < pages.length) {
            pages[currentPage].classList.add("flipped");
            currentPage++;
        } else {
            pages.forEach(page => page.classList.remove("flipped"));
            currentPage = 0;
        }
    }

    document.body.addEventListener("click", flipPage);
});
