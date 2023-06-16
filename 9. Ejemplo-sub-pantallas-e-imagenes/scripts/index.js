let UI = {
    home: null,
    gallery: null
};

function Index() {
    const mainSubpage = $("#index__main__cntr");
    const mainNavButtons = $(".main__nav-btn");

    function loadCallback() {
    };

    function loadMainSubpage(viewLocation) {
        mainSubpage.load(viewLocation, loadCallback);
    };

    for (let i of mainNavButtons) {
        i.addEventListener("click", (e) => {
            mainNavButtons.removeClass("active");
            e.target.classList.add("active");
            loadMainSubpage(e.target.getAttribute("value"));
        });
    };

    //routing simple
    let routes = ["home", "gallery"];
    let currentLocation = "home";
    if(window.location.href.includes("/")){
        currentLocation = window.location.href.split("/").at(-1);
    }
    if (!currentLocation || !routes.includes(currentLocation) || currentLocation == "home") {
        loadMainSubpage("views/home.html");
    } else {
        loadMainSubpage("views/" + currentLocation + ".html");
        for (let i = 0; i < mainNavButtons.length; i++) {
            if (mainNavButtons[i].getAttribute("name") == currentLocation) {
                mainNavButtons.removeClass("active");
                mainNavButtons[i].classList.add("active");
            }
        }
    }
    //-------------------------------
};

Index();