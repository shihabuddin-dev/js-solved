/* Problem-8

The political scene in Bangladesh is in a tense state! Mango-party and Banana-party face off in a great election! Voting is underway, but everyone is confused when it comes to counting! 😵 So, you need to write a function called electionResult(), which will take an Array Input and count the votes and tell you—"Who is the winner?"

If "mango" is more than one in the Array then the function will return "Mango"
If "banana" is more than one in the Array then the function will return "Banana"
If "mango" and "banana" are equal then it will return "Draw"

*/

function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    let mangoVotes = 0;
    let bananaVotes = 0;
    for (let vote of votes) {
        if (vote === "mango") {
            mangoVotes++;
        }
        else if (vote === "banana") {
            bananaVotes++;
        }
    }
    if (mangoVotes > bananaVotes) {
        return "Mango";

    }
    else if (bananaVotes > mangoVotes) {
        return "Banana";
    }
    else if (mangoVotes === bananaVotes) {
        return "Draw";
    }

}
const array = ["mango", "BananA", "na vote", "na vote"];
const result = electionResult(array);
console.log(result);
