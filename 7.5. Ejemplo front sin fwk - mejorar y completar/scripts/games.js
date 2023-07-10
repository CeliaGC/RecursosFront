function Games() {
    const gamesSubpage = $("#games__main__cntr");
    const gamesAsideButtons = $(".games__aside-btn");

    function loadGamesSubpage(viewLocation) {
        LoadSubpage(gamesSubpage, viewLocation, loadGamesSubpageCallback);
    }

    function loadGamesSubpageCallback () {
        LiveData.subPage.game = {};
    }

    for (let i of gamesAsideButtons) {
        i.addEventListener("click", (e) => {
            gamesAsideButtons.removeClass("active");
            e.target.classList.add("active");
            loadGamesSubpage(e.target.getAttribute("value"));
        });
    }

    loadGamesSubpage("views/games/tictactoe.html");
}

Games();

//está el problema de no poder debuggear...
//lo demás joyaza.

//EL DOCUMENT READY EN PPIO NO HACE FALTA. EN TODO CASO AGREGARLO Y/O IR MANEJANDO LOS CALLBACKS ESTOS.