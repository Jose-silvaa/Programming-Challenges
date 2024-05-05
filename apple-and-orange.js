/* https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.

*/

const s = 7;
const t = 10;
const a = 4;
const b = 12;

let apples = [2, 3, -4]
let oranges = [3, -2, -4]


let qtdApples = 0;
let qtdOrange = 0;

for(let i = 0; i< apples.length; i++){
    apples[i] += a; //After the sum, the result will be [6,7,0] //Ok

    if(apples[i] >= s && apples[i] <= t){
        qtdApples++;//In this case, the orange fell within the range of the house.
    }
}

for(let i = 0; i< oranges.length; i++){
    oranges[i] += b;//After the sum, the result will be [6,7,0] //Ok

    if(oranges[i] >= s && oranges[i] <= t){
        qtdOrange++; //In this case, the apple fell within the range of the house.
    }
}


console.log(qtdApples);
console.log(qtdOrange);
