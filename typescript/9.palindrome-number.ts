/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function palindrome(s: string) {
  if (s.length <= 1) {
    return true;
  }
  if (s[0] !== s[s.length - 1]) {
    return false;
  }
  const x = s.slice(1).slice(0, -1);
  return palindrome(x);
}
function isPalindrome(x: number): boolean {
  if (Math.sign(x) === -1) {
    return false;
  }
  return palindrome(x.toString());
}
// @lc code=end
