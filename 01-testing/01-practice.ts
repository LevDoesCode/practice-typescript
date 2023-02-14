function sum(values: number[]): number { // '"number {}' is the result type
    let result: number = 0;
    for (const value of values) {
        result = result + value;
    }
    return result;
}

console.log(sum([1, 2, 3]));
