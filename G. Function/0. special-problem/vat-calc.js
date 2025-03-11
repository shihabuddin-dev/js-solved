/* Problem-1 

Shihab is a smart businessman. Every day, his shop sells a lot of products, and a certain amount of VAT is added to each product. Shihab wants to keep the VAT of each product separately, rather than calculating the VAT of all products together, so that it is convenient to calculate it later.
Since you are a skilled programmer, your job is to create a function called calculateVAT(), which will automatically calculate the VAT of a product when it receives the price of the product as input.
VAT Rate: 7.5% */

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
