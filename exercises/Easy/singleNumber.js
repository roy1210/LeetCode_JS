// Input: [4, 1, 2, 1, 2]
// Output: 4

const singleNumber = (nums) => {
  const hashTable = {}
  let answer
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!hashTable[num]) {
      hashTable[num] = 1
    } else {
      hashTable[num]++
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] === 1) {
      answer = key
    }
  }

  return answer
}

// 4
console.log(singleNumber([4, 1, 2, 1, 2]));