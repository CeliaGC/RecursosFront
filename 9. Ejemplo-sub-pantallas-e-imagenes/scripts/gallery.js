function Gallery() {
    if (UI.gallery == null) {
        UI.gallery = {
            form: null,
            formFields: {},
            entriesContainer: null,
            newEntry: {},
            entries: []
        };
    };

    UI.gallery.form = document.getElementById("gallery__form");

    UI.gallery.formFields.titleInp = document.getElementById("gallery__form__title-inp");
    UI.gallery.formFields.textInp = document.getElementById("gallery__form__text-inp");
    UI.gallery.formFields.fileInp = document.getElementById("gallery__form__file-inp");
    UI.gallery.formFields.submit = document.getElementById("gallery__form__submit-btn");

    UI.gallery.entriesContainer = document.getElementById("gallery__images-cntr");

    function addEntry(newEntry, isNew) {
        let entryCntr = document.createElement("div");
        let entryTitle = document.createElement("p");
        let entryText = document.createElement("p");
        let entryImg = document.createElement("img");

        entryTitle.innerText = newEntry.title;
        entryCntr.appendChild(entryTitle);

        entryText.innerText = newEntry.text;
        entryCntr.appendChild(entryText);

        entryImg.src = newEntry.imgDataURL;
        entryImg.style.height = "150px";
        entryImg.style.width = "auto";
        entryCntr.appendChild(entryImg);

        UI.gallery.entriesContainer.appendChild(entryCntr);
        
        if (isNew == true) {
            UI.gallery.entries.push(newEntry);
            UI.gallery.newEntry = {};
        }
    };

    function encodeImageFileAsURL(fileInput) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            UI.gallery.newEntry.imgDataURL = reader.result;
            addEntry(UI.gallery.newEntry, true);
        };
    };

    function acceptEntry(e) {
        let newEntry = {};
        newEntry.title = UI.gallery.formFields.titleInp.value;
        newEntry.text = UI.gallery.formFields.textInp.value;
        UI.gallery.newEntry = newEntry;
        encodeImageFileAsURL(UI.gallery.formFields.fileInp);
    };

    UI.gallery.form.addEventListener("submit", (e) => {
        e.preventDefault();
        acceptEntry(e);
    });

    for (let i = 0; i < UI.gallery.entries.length; i++) {
        addEntry(UI.gallery.entries[i], false);
    };

};