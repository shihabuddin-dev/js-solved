/* Problem-6

Rahim is a small businessman. He has to make various transactions through bKash every day. One day a customer comes to his shop and says, 👉 "Brother, I want to cash out 2000 taka. How much charge will be deducted?"
Rahim started calculating in his mind, but suddenly he thought - it is a hassle to calculate like this repeatedly! What if there was a function, which would take out the charge for any amount given! And since Rahim knows that you are a brilliant student of Programming Hero, your job is -
Rahim to create a function called cashOut() which will take out the cash out charge when money is input.
Cashout Charge is - 1.75% */

function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
        return "Invalid";
    }
    else if (0 < money) {
        const charge = money * 1.75 / 100;
        return charge;
    }
    else if (money === 0) {
        return 0;
    }
}
const result = cashOut(2000);
console.log(result);