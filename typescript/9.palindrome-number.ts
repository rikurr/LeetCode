/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (Math.sign(x) === -1) {
    return false;
  }
  let xString = x.toString();
  let left = 0;
  let right = xString.length - 1;
  let result = true;

  while (left <= right) {
    if (xString[left] === xString[right]) {
      left++;
      right--;
    } else {
      result = false;
      break;
    }
  }
  return result;
}
// @lc code=end
