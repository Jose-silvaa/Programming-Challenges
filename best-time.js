

var maxProfit = function(prices) {
    
    let smallestNumber = 0;
    let maxProf = Infinity;
    
    for(let i = 0; i<prices.length; i++){

        if(prices[i] < smallestNumber){
            smallestNumber = prices[i];
        }

        let profit = prices[i] - smallestNumber;

        if(profit > maxProf){
            maxProf = profit;
        }
    }

    console.log(maxProf);

};

maxProfit([7,1,5,3,6,4])

//Find the smallest number
