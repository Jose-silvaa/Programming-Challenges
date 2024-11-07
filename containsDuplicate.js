var containsDuplicate = function(nums) {
    

    for(let i = 0; i<nums.length; i++){

        let firstPointer = nums[i];
        let secondPointer = nums[i + 1];

        console.log(firstPointer, secondPointer);
        if(firstPointer == secondPointer){
            return true;
        }
    }

    return false;
};



console.log(containsDuplicate([1,2,3,1]));
