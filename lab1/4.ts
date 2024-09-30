function solution4(array1: number[], array2: number[]): number {
    let array: number[] = array1.concat(array2).sort();
    let len = Math.floor(array.length / 2);
    return (array.length % 2 == 0 ? (array.slice(len - 1, len + 1).reduce((a, c) => a + c) / 2) : array[len]);
}

console.log(solution4([1, 2], [3, 4]));