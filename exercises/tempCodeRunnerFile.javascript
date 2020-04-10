// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let hashTable={}
  let maxLength =0
  let windowStart = 0

  for (let i = 0;i< s.length; i++) {
    const endChar = s[i];

    if (hashTable[endChar]>=0){
      windowStart = hashTable[endChar]+1
    }
    hashTable[endChar] = i

    const currentWindowLength= windowStart -i +1
    maxLength = Math.max(maxLength, currentWindowLength )
  }

  return maxLength
}

// 3
// console.log("Checking...");
console.log(lengthOfLongestSubstring("abcabcbb"));