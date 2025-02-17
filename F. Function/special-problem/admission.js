// problem-3
function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let passSubject = 0;
    let failSubject = 0;

    for (let mark of marks) {
        if (typeof mark !== 'number') {
            return "Invalid";
        }
        else if (mark >= 50) {
            passSubject++;
        }
        else {
            failSubject++;
        }
    }
    return passSubject > failSubject;
}
const array = 90;
const result = willSuccess(array);
console.log(result);