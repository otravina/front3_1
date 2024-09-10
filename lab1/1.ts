function createPhoneNumber(nums: number[]): string {
    if (nums.length !== 10) {
        throw new Error("Массив должен содержать 10 цифр.");
    }
    let part1: string = nums.slice(0, 3).join('');
    let part2: string = nums.slice(3, 6).join('');
    let part3: string = nums.slice(6, 10).join('');
    return `(${part1}) ${part2}-${part3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))