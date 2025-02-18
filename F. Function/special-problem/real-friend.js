/* Problem-9

📢 Is friendship just a word? Or is it real? 🧐 You need to write an isBestFriend() function that will check if the friendship between two friends is real! 🔍
Your function will be given data of 2 friends. If the value of the first person's bestFriend matches the roll of the second person and the value of the second person's bestFriend matches the roll of the first person, then we will understand that they are two true best friends. */

function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return "Invalid";
    }
    else if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    }
    else {
        return false;
    }
}
const f1 = { name: "hashem", roll: 1, bestFriend: 1 };
const f2 = { name: "kashem", roll: 1, bestFriend: 1 };
const result = isBestFriend(f1, f2);
console.log(result);