// const arrayOfNumbers = [2,2,3,3,3,4,5,6,7,7,8,9];
// const frecuencia = {};

// for (let i=0; i<arrayOfNumbers.length; i++){
// const num = arrayOfNumbers[i];

// Ahora hay dos formas de expresar la misma idea. En la línea 9 expresamos que se pueden cumplir dos condiciones: que el número ya exista dentro del objeto "frecuencia" o que aún no exista. En cualquiera de los dos casos, se le suma 1 a la frecuencia de aparición del número dentro del objeto.
// En las líneas 10-14 expresamos lo mismo pero con un condicional. Si se cumple la condición (que aparezca el número dentro del objeto), entra a la línea 11 y se suma 1 a la frecuencia de aparición del número. Si no se cumple la condición, se va directamente a la línea 12 (else) e iguala el número a 1.
// frecuencia[num] = (frecuencia[num] || 0) + 1 
// if (frecuencia[num]) {
//     frecuencia[num]++;
//   } else {
//     frecuencia[num] = 1;
//   }
// };


// for (let i=0; i<arrayOfNumbers.length; i++){
//     const num = arrayOfNumbers[i];
//     if (frecuencia[num] === 1){
//         console.log(num)
//         break
//     }
   
// };

// Hasta aquí el ejemplo de cómo hemos resuelto la kata paso a paso, ahora vamos a hacer lo mismo pero en una función


const arrayOfNumbers = [2,2,3,3,3,4,5,6,7,7,8,9];
const paragraph = document.createElement('p');

function play(){
const globo = document.createElement('div');
    const body = document.getElementsByTagName('body'); 
    const playButton = document.getElementsByTagName('button');
    
    globo.className = 'div-result'
    globo.appendChild(paragraph)
    // globo.innerHTML = paragraph;

    document.body.appendChild(globo);
    playButton.disabled = true
    
    
    findFirstUniqueNumber(arrayOfNumbers);

}
function findFirstUniqueNumber(arrayOfNumbers){

    const frecuencia = {};
    for (let i=0; i<arrayOfNumbers.length; i++){
    const num = arrayOfNumbers[i];  

    frecuencia[num] = (frecuencia[num] || 0) + 1 
    
    }

    for (let i=0; i<arrayOfNumbers.length; i++){
        const num = arrayOfNumbers[i]; 
            if (frecuencia[num] === 1){
                paragraph.innerText = 'El número primero y único es '+ num 
                break
            }

    };

};

const texto1 = "Anita lava la tina";
const texto2 = "Hola mundo";
// esPalindromo(texto1);
function esPalindromo(param) {

    let textLower = param.toLowerCase();
    let textNoSpace = textLower.split(" ").join("");
    let separateChar = textNoSpace.split('');
    let reverseIndex = separateChar.reverse().join('');

    if(reverseIndex === textNoSpace){
        return true

    }else{
        return false
    }
   
};

 console.log(esPalindromo(texto1))


