function fibonacci(num) {
    // Handle base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// Example usage:
console.log(fibonacci(1)); // 0
console.log(fibonacci(5)); // 3
