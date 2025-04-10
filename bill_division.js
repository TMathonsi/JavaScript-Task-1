function bonAppetit(bill, k, b) {
    const total = bill.reduce((acc, val, i) => acc + (i !== k ? val : 0), 0) / 2;
    if (b === total) console.log("Bon Appetit");
    else console.log(b - total);
}