/* Problem-4

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = "I am a hard working person"

Output: "I am a hard working person"
*/
const statement = "I am a hard working person";
let reverseStatement = statement.split(" ").reverse().join(" ");
console.log(reverseStatement);