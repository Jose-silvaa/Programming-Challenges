//Given an integer array nums, find the  subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

var maxSubArray = function(nums) {
  
    let max_global = nums[0]
    let max_current = nums[0];
    for(let i = 1; i< nums.length; i++){
        max_current = Math.max(nums[i], max_current + nums[i]);

        if(max_current > max_global){
            max_global = max_current;
        }
    }

    return max_global;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));