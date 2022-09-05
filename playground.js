// Head
// Implementa una función head (inmutable),
//  tal que, dado un array como entrada extraiga y
//  devuelva su primer elemento. Utiliza destructuring.

const arr = ["sergio","pepe","juan","ivan","jose"];

const head = (array) => {

  const [first] = array;

  return first;

}
console.log(head(arr));




// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
// const arr = ["sergio", "pepe", "juan", "ivan", "jose"];
// const tail = ([first,...array]) => {

//   return array;

// };

// console.log(tail(arr));




// Init
// Implementa una función init (inmutable), tal que,
// dado un array como entrada devuelva todos los elementos menos el último.
// Utiliza los métodos que ofrece Array.prototype.
//  const arr = ["sergio","pepe","juan","ivan","jose"];
// const init = (arr) => {
//     const copy = arr.slice(0,arr.length);
//     copy.pop();
//     return copy;
// };
// console.log(init(arr));




// Last
// Implementa una función last (inmutable),
//  tal que, dado un array como entrada devuelva el último elemento.

// const arr = ["sergio", "pepe", "juan", "ivan", "jose"];

// const last = (array) => {
//   const last = array.at(-1);
//   return last;
// }

// console.log(last(arr));


// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
//  devuelva la concatenación de ambos. Utiliza rest / spread operators.

// const array = ["coche","avion","moto","f1"];
// const arrayb = ["macdonalds","burguerking","kfc"];

// const concat = (a,b) =>{

//   const copy = [...a,...b];
//   return copy;

// }

// console.log(concat(array,arrayb));

// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source
// devuelva un nuevo objeto con las propiedades de source:

// const source = {
//   name:"Sergio",
//   surname:"Perez",
//   country:"Spain",
// };

// function clone(source) {

//   const copy = { ...source };
//   return copy;

// }

// console.log(clone(source));



// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source,
//  y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// const b = { name: "Luisa", age: 31, married: true };

// function merge(source, target) {

//   const copy = {
//     ...target,
//     ...source
//   }

//   return console.log(copy);

// }
// merge(a, b);




// const books = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// function isBookRead(books, titleToSearch ) {

//     const existe = false;
//     const found = books.filter(element => element?.title === titleToSearch);
    
//     if(found.length === 0){
//       return existe;
//     }
//     else{
//       const leer = found[0]?.isRead;
//       return leer;
//     }


// }

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra" )); // false