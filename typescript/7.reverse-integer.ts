/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const limit = 2147483648
  const reverseNum = parseFloat(x.toString().split("").reverse().join(''));
  return reverseNum > limit ? 0 : reverseNum * Math.sign(x)
}
// @lc code=end
