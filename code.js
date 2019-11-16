
demo1:
/**
 * 给予包含若干整数的数组nums,查找数组中所有唯一的三元组，它们的总和为零
 * 例：
 * 给定数组nums = [-1,0,1,2,-1,-4]，
 * 解决方案集是：
 * [
 * [-1,0,1]，
 * [-1,-1,2]
 * ]
 *
 * @param { Array } nums
 * @return { Array }
 */
let a = [-1,2,1,5,6,1,1,0,0,-2,-3]
console.log(threeSum(a))

function threeSum(nums) {
    const rel = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            nums.forEach((item, index) => {
                if (index == i || index == j) return;

                if (nums[i] + nums[j] + item == 0) {

                    const unite = rel.every((relItem) => {
                        if ((relItem.indexOf(nums[i]) > -1 &&
                            relItem.indexOf(nums[j]) > -1 &&
                            relItem.indexOf(item) > -1)
                        ) {
                            const newArr = Object.assign([], relItem);

                            if (nums[i] == 0 && nums[j] == 0 && item == 0) {
                                if (relItem[0] || relItem[1] || relItem[2]) {
                                    return true;
                                }
                            }

                            return false;
                        }

                        return true;
                    });

                    if (unite) {
                        rel.push([nums[i], nums[j], item]);
                    }
                }
            })
        }
    }

    return rel;
}
