//08/07/2024

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.


var insert = function(intervals, newInterval) {

    let newArray = []; //Matrix used to create chickens that do not overgrow

    let i = 0;

    while(i < intervals.length && intervals[i][1] < newInterval[0]){//Add all intervals that come before newInterval
        newArray.push(intervals[i])
        i++;
    }

   
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {//Merge all overlapping intervals with newInterval
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    newArray.push(newInterval);


    while (i < intervals.length) {//Add remaining ranges
        newArray.push(intervals[i]);
        i++;
    }

    

    return newArray;
};


console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));



// Understanding the Problem
// You have:

// 1 - An array of non-overlapping intervals sorted by their starting times.
// 2 - A new interval that needs to be inserted into this array.
// 3 - The result should be a new array of intervals that includes the new interval, still sorted and without any overlapping intervals.
// 4 - Non-overlapping ranges are ranges that do not intersect or have no parts in common



// When do intervals overlap ? 

// Intervals overlap when they share at least one common point or interval.
// Formally, two intervals [𝑠𝑡𝑎𝑟𝑡1,𝑒𝑛𝑑1] and [start2,end2] overlap if:

// START1 <= END2 and START2 <= END1

// In simpler terms, intervals overlap if there exists any point that belongs to BOTH INTERVALS. 
// For example, the intervals [1,3] and [2,4] overlap because they share the point 2 and 3.



//First Step : Check which intervals are overlapped with new Interval


