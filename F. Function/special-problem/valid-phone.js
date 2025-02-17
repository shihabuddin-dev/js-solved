/* Problem-2
Now your job is to create a function called validContact(), which will check whether a Contact number is valid based on some conditions. The conditions for a Contact number to be valid are
The Contact Number must be 11 digits.
The Contact Number must start with "01"
There cannot be any spaces in the Contact Number.

If the above conditions are met, it will return true as the output. Otherwise, it will return false as the output.
 */

function validContact(contact) {
    if (contact.length === 11 && contact.startsWith("01") && !contact.includes(" ")) {
        return true;
    }
    else if (typeof contact !== 'string') {
        return "Invalid";
    }
    else {
        return false;
    }
}
const number = validContact("01912345678");
console.log(number);
