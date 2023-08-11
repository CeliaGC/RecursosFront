const arrayNames = ["Anthony", "Brayan", "Antonio", "Rodrigo", "Rebeca", "Christian", "Raúl", "Yo", "Juan", "Miguel", "Isabel", "Celia", "Javi", "Laura A Secas", "Slava", "Fran", "Celia Prieto", "Gemma", "Ninguno jaja"];
const paragraph = document.createElement('h3');


function selector(arrayNames) {
    document.getElementById("button").disabled = true;
    const globo = document.createElement('div');

    globo.className = 'div-result'
    const body = document.getElementsByTagName('body');
    document.body.appendChild(globo);



    // let result = Math.random() * arrayNames.length;
    let result = Math.floor(Math.random() * arrayNames.length);
    let afortunado = arrayNames[result];
    // console.log(result);
    console.log(arrayNames[result]);
    paragraph.innerText = 'El Brishante afortunado esssss ' + afortunado;
    globo.appendChild(paragraph);
};

