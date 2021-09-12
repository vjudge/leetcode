#include <stdio.h>

/**
* Note: The returned array must be malloced, assume caller calls free().
*/
// 方法一：用时 92ms
// 执行用时超过了 52%
// 消耗内存超过了 85%
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
	int i,j;
	int *result = NULL;
	*returnSize = 2;
	for (i=0; i<numsSize-1; i++) {
		for (j=i+1; j<numsSize; j++) {
			if (nums[i] + nums[j] == target) {
				result=(int*)malloc(sizeof(int)*2);
				result[0] = i;
				result[1] = j;
				return result;
			}
		}
	}
	return result;
}

int main(int argc, char *argv[]) {
	int target = 9;
	int numsSize = 4;
	int nums[] = {2, 7, 11, 15};
	int returnSize;
	int result = twoSum(&nums, numsSize, target, &returnSize);
}
