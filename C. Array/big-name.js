/* problem-19
Find the friend with the biggest name.
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let bigName = names[0];
for (let i = 0; i < names.length; i++) {
    if (names[i].length > bigName.length) {
        bigName = names[i];
    }
}
console.log(bigName);