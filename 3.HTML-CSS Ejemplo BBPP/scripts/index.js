const mainSubpage = $("#main__subpage-cntr");
const mainNavButtons = $(".main__nav-btn");

function loadSubpage(domDestination, viewLocation) {
    domDestination.load(viewLocation);
}
function loadMainSubpage(viewLocation) {
    loadSubpage(mainSubpage, viewLocation);
}

document.addEventListener("DOMContentLoaded", (e) => {
    mainSubpage.load("views/home.html");

    for (let i of mainNavButtons) {
        i.addEventListener("click", (e) => {
            mainNavButtons.removeClass("active");
            e.target.classList.add("active");
            loadMainSubpage(e.target.getAttribute("value"));
        });
    }
});