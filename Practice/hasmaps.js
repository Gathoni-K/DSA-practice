/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // A Map is ideal for storing value -> index mappings
    const seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        // Check if the required complement is already in our map
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        
        // Store the current number and its index for future lookups
        seen.set(num, i);
    }
    
    return []; // Return empty if no solution is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]