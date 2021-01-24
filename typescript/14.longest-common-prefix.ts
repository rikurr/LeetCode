/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): any {
  let common = "";

  if (strs.length === 0) {
    return common;
  }

  let indexWord = strs[0];
  let indexLength = 0;
  for (let letter of indexWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord.charAt(indexLength);

      if (letter !== currentLetter || indexLength > currentWord.length) {
        return common;
      }
    }
    indexLength++;
    common += letter;
  }
  return common;
}
// @lc code=end
