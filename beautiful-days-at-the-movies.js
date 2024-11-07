//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true


function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDaysCount = 0;
    
    for(let number = i; number <= j; number++){

        let invertedNumber = parseInt(number.toString().split('').reverse().join(''));

        let differenceNumber = (number - invertedNumber)/k;
        
        if(differenceNumber === Math.trunc(differenceNumber)){
            
           beautifulDaysCount++;
        }
    }

    return beautifulDaysCount;

}

beautifulDays(20, 23, 6)


// //Function Description

// Complete the beautifulDays function in the editor below.

// beautifulDays has the following parameter(s):

//  int i: the starting day number
//  int j: the ending day number
//  int k: the divisor


//Example 1
/*
    Explanation

    Lily may go to the movies on days 20,21,22,and 23. 
    We perform the following calculations to determine which days are beautiful:

    Day 21 is not beautiful because the following doesn't evaluate to a whole number : 

    21 - 12/6 = 1.5

    Return the number of beautiful days in the range.

*/

