// Problem-1 
function calculateVAT(price) {
    if (typeof price !== 'number' || price < 0) {
        return "Invalid";
    }
    else {
        const productVat = price * 7.5 / 100;
        return productVat;
    }
}
const result = calculateVAT(1000);
console.log(result);
