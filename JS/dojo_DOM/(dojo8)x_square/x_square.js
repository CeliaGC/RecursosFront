document.querySelector('#type').addEventListener("click", innerSquare);
function innerSquare() {
    var father = document.getElementById('fatherSquare');
    var newDiv = document.createElement("div");
    var newText = document.createElement("p");


    newText.id = "firstWords";
    newDiv.id = "childSquare";

    newText.textContent = "Hello World, Hi Daddy";

    father.appendChild(newDiv);
    newDiv.appendChild(newText);
}