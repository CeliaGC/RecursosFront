let LiveData = {};

function LoadSubpage(domDestination, viewLocation, callBack) {
    domDestination.load(viewLocation, callBack);
}

function Index() {
    const mainSubpage = $("#index__main__cntr");
    const mainNavButtons = $(".main__nav-btn");

    function loadMainSubpage(viewLocation) {
        LoadSubpage(mainSubpage, viewLocation, loadMainSubpageCallback);
    }

    function loadMainSubpageCallback() {
        LiveData.subPage = {};
    }

    for (let i of mainNavButtons) {
        i.addEventListener("click", (e) => {
            mainNavButtons.removeClass("active");
            e.target.classList.add("active");
            loadMainSubpage(e.target.getAttribute("value"));
        });
    }

    loadMainSubpage("views/home.html");
}

Index();