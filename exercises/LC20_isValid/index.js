/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true

1. make array and push start tag.
2. make hash table to define closing tag
3. iterate string and push start tag to stackArray
4. when iterating close tag, check last element of array. if not the key of hash table, => return false
5. (array is popping...) in the end, if stackArray.length ===0 => true

*/

const isValid = s => {
  let stack = []
  let pairsHashMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairsHashMap[char]) {
      stack.push(char)

      // Memo: pop(): take out the last element from array
    } else if (pairsHashMap[stack.pop()] !== char) {
      return false
    }
  }
  return stack.length === 0
};



module.exports = isValid;
