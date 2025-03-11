/*** problem-6

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 20;
let ticketPrice = 800;
let isStudent = true;

if (age < 10) {
    console.log("Free");
}
else if (isStudent === true) {
    // discount price 
    studentDiscount = ticketPrice * 50 / 100;
    console.log(studentDiscount);

}
else if (age >= 60) {
    // discount price 
    seniorCitizenDiscount = ticketPrice * 85 / 100;
    console.log(seniorCitizenDiscount);
}

else {
    console.log("Regular ticket fare 800 tk");
}