function sockMerchant(n, ar) {
    let pairs = 0;
    const map = {};
    for (let sock of ar) {
        map[sock] = (map[sock] || 0) + 1;
        if (map[sock] % 2 === 0) pairs++;
    }
    return pairs;
}