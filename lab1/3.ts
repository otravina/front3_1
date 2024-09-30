function solution3(nums: number[], k: number): number[] {
    if(k > nums.length) k %= nums.length;
    k += 1;
    return Array().concat(nums.slice(k, nums.length), nums.slice(0, k));
}

console.log(solution3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14))