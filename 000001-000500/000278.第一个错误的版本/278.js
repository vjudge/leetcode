/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 方法一：用时 64ms
// 执行用时超过了 90%
// 消耗内存超过了 59%
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      if (n === 1) { return 1 }
      let left = 1, right = n
      while (left < right) {
          const mid = Math.floor(left + (right - left) / 2)
          if (isBadVersion(mid)) {
              right = mid
          } else {
              left = mid + 1
          }
      }
      return left
    };
};
