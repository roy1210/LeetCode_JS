/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 1. Make resArray and return
 2. Make hash table to register each element and index number
 3. for loop. make a target value
 4. if the target value in the hash table, push to array for current index and value of target key
 */

const twoSum = (nums, target) => {
  let res=[]
  let hashTable={}

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const complement = target-element
    if (hashTable[complement] !== undefined){
      res.push(hashTable[complement])
      res.push(i)
    }else{
      hashTable[element]=i
    }
  }

  console.log(hashTable);
  return res
};

// 0,1
console.log(twoSum([2, 7, 11, 15],9));