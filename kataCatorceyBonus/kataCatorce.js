const names = [];
const input = ["Paula", "Carmen", "Ana", "Zoila", "Paloma", "Emilio"];

const readNames = () => {
  for (let i = 0; i < input.length; i++) {
    names.push(input[i]);
  }
  
  names.sort(); // sort: ordenar alfabeticamente в алфавитном порядке
  console.log('Nombres ordenados alfabéticamente:', names);
};

readNames();
