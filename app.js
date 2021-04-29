//hasId: check if input object has an id property
console.log("-- hasId --");
const hasId = ({id}) => id ? true : false;
const obj1 = {
    id: 12345,
    name: "aaa"
} 
const obj2 = {
    name: "bbb",
    surname: "ccc"
} 
console.log(hasId(obj1));
console.log(hasId(obj2));

//head: return first element from input array
console.log("-- head --");
const head = ([first,]) => first;
console.log(head(["primerElem","segundoElem","tercerElem"]));

//tail: return last element from input array
console.log("-- tail --");
const tail = (array) => {
    const [first,] = array.reverse();
    return first;
}
console.log(tail(["primerElem","segundoElem","tercerElem"]));

//swapFirstToLast: first element of the array is moved to last position
console.log("-- swapFirstToLast --");
const swapFirstToLast = ([first, ...rest]) => rest.concat(first);
console.log(swapFirstToLast(["first", "middle", "last"]));

//excludeId: returns a copy of the input object but excluding the id property
console.log("-- excludeId --");
const excludeId = ({id, ...restOfProps}) => restOfProps;
const objExcludeIdInput = {
    id: "id123",
    name: "name",
    surname: "surname"
}
console.log(excludeId(objExcludeIdInput));

//wordsStartingWithA: given an input array, return a new array containing only words starting with 'a'
console.log("-- wordsStartingWithA --");
const wordsStartingWithA = (words) => words.filter((word) => word.startsWith('a')||word.startsWith('A'));
console.log(wordsStartingWithA(["topic","array","asset","string","prototype"]));


//concat: given multiple string arguments, returns a string containing all arguments separated by |
console.log("-- concat --");
const concat = ([...strArgs]) => strArgs.join("|");
console.log(concat(["arg1","arg2","arg3","arg4"]));

//multArray: given an array of numbers and a number parameter, return another array where every element has been mutiplied by the number param.
console.log("-- multArray --");
const multArray = ([...numbers], num) => numbers.map(number => number*num);
console.log(multArray([1,2,3,4,5],5));

//calcMult: returns the multiplication of all input numbers
console.log("-- calcMult --");
const calcMult = ([...numbers]) => numbers.reduce((acc, num) => acc*num,1);
console.log(calcMult([1,2,3,4,5],5));

console.log("////////////// Extra //////////////");

//swapFirstSecond: returns a new array where the first element and the second have been swapped
console.log("-- swapFirstSecond --");
const swapFirstSecond = ([first,second,...rest]) => [second,first].concat(rest);
console.log(swapFirstSecond(["primerElem","segundoElem","tercerElem"]));

//firstEqual: given multiple string inputs and a character, returns true if all strings begin with the input character
console.log("-- firstEqual --");
const firstEqual = ([...strInputs],charInput) => strInputs.every(str => str.startsWith(charInput));
console.log(firstEqual(["array", "air", "argument"],"a"));

//longest: given multiple input arrays, returns the longest
console.log("-- longest --");
const longest = (...arrayInputs) => {
    arrayInputs.sort((a,b) => b.length-a.length);
    const [first,...rest] = arrayInputs;
    return first;
}
console.log(longest(["a","b","c"],["first","second"],[1,0,3,5,6,8]));

//searchInStringV1: given a string and a character as input, returns how many times the character appears on the string
console.log("-- searchInStringV1 --");
const searchInStringV1 = (str,char) => Array.from(str).reduce((reps,chr) => {
    if (chr === char) reps++;
    return reps; 
},0);
console.log(searchInStringV1("prototype","o"));

//searchInStringV2: same as v1, but without using reduce
console.log("-- searchInStringV2 --");
const searchInStringV2 = (str,char) => Array.from(str).filter(ch => ch===char).length;
console.log(searchInStringV2("prototype","o"));

//sortCharacters: returns input string ordered alphabetically
console.log("-- sortCharacters --");
const sortCharacters = (str) => {
    const inputArray = Array.from(str);
    inputArray.sort();
    return inputArray.join("");
}
console.log(sortCharacters("parameter"));

//shout: returns every input string in uppercase and with extra exclamation points
console.log("-- shout --");
const shout = (...inputStr) => inputStr.map(str => str.toUpperCase()+"!!!").join(" ");
//console.log(shout("que","deje","de","llover"));

//Lista de la compra
console.log("-- Lista de la compra --");
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
  ];

//A. Get new list with VAT (21%) applied to every product
console.log("-- A. Aplicar IVA (21%) a cada producto --");
const applyVAT = (cart) => cart.map(article => {
    article.price = article.price + article.price*0.21;
    return article;
});
console.log(applyVAT(shoppingCart));

//B. Order the list by units (descending order)
console.log("-- B. Ordenar la lista de más a menos unidades --");
const orderByDescendingUnits = (cart) => {
    cart.sort((a,b) => b.units-a.units);
    return cart;
}
console.log(orderByDescendingUnits(shoppingCart));

//C. Get the total cost (no VAT) of products of a given category.
console.log("-- C. Obtén el subtotal gastado en droguería --");
const getTotalCostCategory = (cart,category) => cart.filter(article => article.category===category).reduce((subtotal,article) => subtotal+article.price,0);
console.log(getTotalCostCategory(shoppingCart,"Droguería"));

//D. Print the list with format "Producto -> Precio Total €" and ordered by category
console.log("-- D. Imprimir por consola en formato 'Producto -> Precio Total €' y ordenada por categoría --");
 const printCart = (cart) => {
     console.log("Producto -> Precio Total €");
     cart.sort((a,b) => (a.category > b.category) ? -1 : 1);
     cart.forEach(article => {
         console.log(article.product + " -> " + article.price + "€");
     });
 }
 console.log(printCart(shoppingCart));
