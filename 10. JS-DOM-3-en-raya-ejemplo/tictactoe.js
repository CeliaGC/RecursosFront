//PROBAR CONEXION SCRIPT
//console.log("Bienvenido al Ta Te Ti");

//PLAN DE TRABAJO PARA CREAR UN TRES EN LÍNEA / TATETI / MICHI. INTERACTIVO PARA DOS JUGADORES
//TAREAS

//RESUELTO POR AHORA.
//PENSAR EN EL DISEÑO DE LA GRILLA. 9 CAJAS.

//RESUELTO POR AHORA.
//DEFINIR LA MATRIZ COMO VARIABLE O CONSTANTE.
//DEFINIR EL TURNO DE CADA JUGADOR COMO VARIABLE.

//RESUELTO POR AHORA.
//DESARROLLAR LA FUNCIONALIDAD DE LAS FIGURITAS/FICHAS
//FUNCIONALIDAD VISUAL
    //QUE RESPONDA AL CLICK
//FUNCIONALIDAD LÓGICA
    //QUE MODIFIQUE LA MATRIZ Y EL TURNO

//PENDIENTE
//DEFINIR EL GANADOR

//PENDIENTE
//DEFINIR EL RESET (VISUALMENTE Y LÓGICAMENTE)

//TRAE SOLAMENTE EL PRIMER ELEMENTO DE LA LISTA
//const michiCellFirst = document.querySelector(".michi__cell");

//SON EQUIVALENTES:
//const michiCells = document.getElementsByClassName("michi__cell");
const michiCells = document.querySelectorAll(".michi__cell");

let michiMatrixData = [
    ['E', 'E', 'E'],
    ['E', 'E', 'E'],
    ['E', 'E', 'E']
];
let playerTurn = 'X';

for(let i = 0; i < michiCells.length; i++){
    michiCells[i].addEventListener("click", (e) => {
        let cellValue = e.target.getAttribute("value");
        clickedMichiCell(cellValue);
    });
}

function changeTurn(){
    if(playerTurn == 'X'){
        playerTurn = 'O';
    }else{
        playerTurn = 'X';
    }
}

function clickedMichiCell(cellNum){
    //VISUAL
    let clickedCell = document.getElementById("michi__cell-" + cellNum);
    clickedCell.innerHTML = playerTurn;
    //LÓGICA
    if(cellNum == '1'){
        michiMatrixData[0][0] = playerTurn;
    }
    if(cellNum == '2'){
        michiMatrixData[0][1] = playerTurn;
    }
    if(cellNum == '3'){
        michiMatrixData[0][2] = playerTurn;
    }
    if(cellNum == '4'){
        michiMatrixData[1][0] = playerTurn;
    }
    if(cellNum == '5'){
        michiMatrixData[1][1] = playerTurn;
    }
    if(cellNum == '6'){
        michiMatrixData[1][2] = playerTurn;
    }
    if(cellNum == '7'){
        michiMatrixData[2][0] = playerTurn;
    }
    if(cellNum == '8'){
        michiMatrixData[2][1] = playerTurn;
    }
    if(cellNum == '9'){
        michiMatrixData[2][2] = playerTurn;
    }

    changeTurn();
}

function resetMichiMatrix(){

}