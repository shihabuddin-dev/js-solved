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
const number = validContact(true);
console.log(number);
