const apiURL = 'http://localhost:3000/Coders'; // Reemplazar la URL 

function getData() {


  axios.get(apiURL)
    .then(response => {
      const data = response.data;
      const resultsElement = document.getElementById('results');

      const ul = document.createElement('ul');

      data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.Name; // Actualizar según tus datos
        ul.appendChild(li);
      });

     
      resultsElement.appendChild(ul);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

getData();
   
  async function add(){
    
    const coderInput = document.getElementById('name');
    const newCoder = {
    "id": "",
    "Name": coderInput.value
    }

 await axios.post(apiURL, newCoder)
 
}



// Obtain four first registers instead of all of them
  
// function getfourFirst() { 
//   axios.get(apiURL)
//     .then(response => {
//       const data = response.data;
//       const resultsElement = document.getElementById('results');

//       const ul = document.createElement('ul');

//       // for (let i = 0; i < 4 && i < data.length; i++) {
//         for (let i = 0; i < 4; i++) {
//         const item = data[i];
//         const li = document.createElement('li');
//         li.innerHTML = item.Name; // Actualizar según tus datos
//         ul.appendChild(li);
//       }

     
//       resultsElement.appendChild(ul);
//     })
//     .catch(error => {
//       console.error('Error al obtener los datos:', error);
//     });
// }




// Next step: Obtain data from "service" file instead of mixing js and DOM in the same script


// import { getAllCoders } from './service.js';

// const { default: axios } = require("axios");

// async function displayCoders() {
//   let resultsElement = document.getElementById('results');

//   let allCoders = await getAllCoders();

//   resultsElement.innerHTML = '';

//   let CoderList = document.createElement('ul');

 
//   allCoders.forEach(coder => {
//     let listItem = document.createElement('li');
//     listItem.textContent = coder.name; 
//     CoderList.appendChild(listItem);
//   });


//   resultsElement.appendChild(CoderList);
// }

// displayCoders();