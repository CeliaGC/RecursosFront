document.querySelector('#freak').addEventListener("click", innerSquare);

var father = document.getElementById('fatherSquare');
var newDiv = document.createElement("div");
var newText = document.createElement("p");




function innerSquare() {

    var newDiv = document.createElement("div");
    var newText = document.createElement("p");
    
    document.querySelectorAll('input')[1].value = "CLICK N KILL THOSE BASTARDS";

    newText.id = "firstWords";
    newDiv.id = "childSquare";

    newText.textContent = "Hello World, Hi Daddy";

    father.appendChild(newDiv);
    newDiv.appendChild(newText);
    
}

document.querySelector('#kill').addEventListener("click", killThoseB);

function killThoseB(){

    let erasable = document.getElementById('childSquare');

    if(father.contains(erasable)){
    father.removeChild(father.lastChild);

    }else{
        document.querySelectorAll('input')[1].value = "YOU ANGEL OF DEATH";
    }
}




