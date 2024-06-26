//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

// Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
// Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
// If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given  queries in the form of q, x, y and z representing the respective positions for cats  
//and , and for mouse . 
//Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.


function catAndMouse(x, y, z) {

    var distCatA = Math.abs(x - z);
    var distCatB = Math.abs(y - z);


    if(distCatA < distCatB ){
        return "Cat A"
    }else if (distCatB < distCatA ){
        return "Cat B"
    }else{
      return "Mouse C"
    }
}

catAndMouse(2, 5, 4)


// Complete the catAndMouse function in the editor below.

// catAndMouse has the following parameter(s):

// int x: Cat A 's position
// int y: Cat B 's position
// int z: Mouse C 's position

//Example -- The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4 .
// Cat B, at position 5 will arrive first since it is only 1 unit away while the other is 2 units away.
// Return 'Cat B'.


