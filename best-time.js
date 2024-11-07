// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
   

    let smallestNumber = Infinity;
    let maxProfit = 0;
   
    for(let i = 0; i<prices.length;i++){
        
        if(prices[i] < smallestNumber){
            smallestNumber = prices[i]
        }

        let profit = prices[i] - smallestNumber;

        if(profit > maxProfit){
            maxProfit = profit;
        }
       
    };

    return maxProfit;
}

maxProfit([7,1,5,3,6,4])
