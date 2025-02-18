/* Problem-7

Your task is to create a function called validEmail(), which will take an email input and return a boolean value (true/false) to check whether it is correct or not.
The conditions for an email to be valid are
The email must not have special characters like ".-_+@" at the beginning.
The email must have @ in the middle.
The email must not have any spaces.
The email must have .com at the end.
If the above conditions are met, it will return true as the output. Otherwise, it will return false as the output. */

function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }
    let firstChar = email.charAt(0);
    if (email.includes(" ") || !email.endsWith(".com") || !email.includes("@") || ".-_+@".includes(firstChar)) {
        return false;
    }
    return true;

}
const result = validEmail("shihab365@gmail.com");
console.log(result);