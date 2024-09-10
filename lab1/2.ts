class Challenge {
    static solution(number: number): number {
        if(number < 0) return 0;
        let n: number = 0;
        for(let i: number = 1; i < number; i++)
            if(i % 3 == 0 || i % 5 == 0) n += i;
        return n;
    }
}

console.log(Challenge.solution(10));