const text1 = "Anita lava la tina"
const text2 = " Hola Mundo !"

function isPalindrom(text){

 let textNoCapitals = text.toLowerCase();
//  let textNoExclamations = textNoCapitals.replace(/[!.,;:]/g, "");
 let textNoExclamationsNoSpaces = textNoCapitals.replace(/[!.,;:\s]/g, "");

 //.trim() ha eliminado los espacios del principio y el final del string, no el de enmedio
//  let textNoSpaces = textNoExclamations.trim();

let charactersArray = textNoExclamationsNoSpaces.split('');
let reversedArray = charactersArray.reverse();
let reversedText = reversedArray.join('');



// return textNoExclamationsNoSpaces === reversedText

if(textNoExclamationsNoSpaces === reversedText){
   return true} else{
    return false
   }
}

// isPalindrom(text2);

console.log(isPalindrom(text2))