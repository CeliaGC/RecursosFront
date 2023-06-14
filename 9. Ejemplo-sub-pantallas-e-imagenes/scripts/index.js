let UI = {
    home: {},
    gallery: {}
};

function Index() {
    const mainSubpage = $("#index__main__cntr");
    const mainNavButtons = $(".main__nav-btn");

    function loadCallback() {
    };

    function loadMainSubpage(viewLocation){
        mainSubpage.load(viewLocation, loadCallback);
    };

    for (let i of mainNavButtons) {
        i.addEventListener("click", (e) => {
            mainNavButtons.removeClass("active");
            e.target.classList.add("active");
            loadMainSubpage(e.target.getAttribute("value"));
        });
    };

    loadMainSubpage("views/home.html");
};

Index();