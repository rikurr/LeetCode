/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInt = roman[s[i]];
    let nextInt = roman[s[i + 1]];
    if (currentInt < nextInt) {
      n -= currentInt;
    } else {
      n += currentInt;
    }
  }
  return n;
}
// @lc code=end
