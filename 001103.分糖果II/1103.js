/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// 战胜: 77.21%
var distributeCandies = function(candies, num_people) {
    let n = 1
    let result = []
    for (let i = 0; i < num_people; i++) {
        result[i] = 0
    }
    while(candies) {
        for (let i = 0; i < num_people; i++) {
            if (n <= candies) {
                result[i] += n
                candies -= n
                n ++
            } else {
                result[i] += candies
                candies = 0
                break
            }
        }
    }
    return result
};

// console.log(distributeCandies(10, 3))
// console.log(distributeCandies(7, 4))
console.log(distributeCandies(60, 4))
