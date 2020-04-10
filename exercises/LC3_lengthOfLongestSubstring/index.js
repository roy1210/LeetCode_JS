// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let windowCharsMap = {}

  // Memo: index of window range start point
  let windowStart = 0
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    // Memo: Check if 1st char of window is same as endChar
    // Then the window go to shrink, so window will start +1 from the windowCharsMap[endChar]
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1
    }
    windowCharsMap[endChar] = i
    // Memo: Pick a past maxLength or current length
    // +1 due to Array(i) start from 0
    maxLength = Math.max(maxLength, i - windowStart + 1)
  }

  return maxLength
}

module.exports = lengthOfLongestSubstring;
