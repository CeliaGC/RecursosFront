document.querySelector('#type').addEventListener("click", innerSquare);
function innerSquare() {
    var button = document.getElementById('type');
    var father = document.getElementById('fatherSquare');
    var newDiv = document.createElement("div");
    var newText = document.createElement("p");  

    newText.id = "firstWords";
    newDiv.id = "childSquare" + (father.childElementCount);
    newDiv.className = "children";

    newText.textContent = "Hello World, Hi Daddy";

    father.appendChild(newDiv);
    newDiv.appendChild(newText);
    
    fiveIsEnough();

    function fiveIsEnough(){
        let fiveList = document.getElementById("childSquare5");
        if(father.contains(fiveList)){
        button.removeEventListener("click", innerSquare);
        }
    }
}