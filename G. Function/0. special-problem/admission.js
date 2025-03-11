/* problem-3

Shihab is preparing for the university entrance exam. 🎓📖 He has taken various model tests and has scored different marks each time. But he is worried—will he be able to pass the final exam? For Shihab, you write a function called willSuccess(), which takes an Array of Numbers as input and analyzes Shihab's results and gives Shihab a guideline.
A mark of 50 or more in the model test means Pass. And getting below 50 means Fail.
If the number of passed tests is more than the number of failed tests, then he will think that he is ready and the function will return true
Otherwise, he will think that the preparation is not enough and the function will return false
 */

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
const array = [60, 70, 80, 40, 30];
const result = willSuccess(array);
console.log(result);