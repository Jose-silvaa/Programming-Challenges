// Given an array of positive integers nums and a positive integer target, 
// return the minimal length of a subarray whose sum is greater than or equal to target. 
// If there is no such subarray, return 0 instead.


var minSubArrayLen = function(target, nums) {
    
    let left = 0;
    let sum = 0;
    let minLength = Infinity;


    for(let right = 0; right < nums.length; right++){
        sum += nums[right]

        while(sum >= target){
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
    
};



minSubArrayLen(7, [2,3,1,2,4,3])