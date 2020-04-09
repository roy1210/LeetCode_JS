// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
  // Memo: make hash table ex. {2:0, 7:1, 11:2}
  const numsVisited = {}
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const complement = target - num

    // Memo: if answer already exist in numsVisited
    if (numsVisited[complement] !== undefined) {
      res.push(i)
      res.push(numsVisited[complement])
    } else {
      numsVisited[num] = i
    }
  }

  return res
}

module.exports = twoSum;
