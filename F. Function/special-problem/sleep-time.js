/* Problem-5 

Shihab falls asleep while working in the office. Due to which he cannot finish all the work on time. He needs a function through which he wants to calculate the total time he slept in the office and then he wants to come home and do office work during that time.
Your task is to create a function called calculateSleepTime(), which will take an Array as input. The Array will contain the number of seconds Shihab slept in. The function will extract the total time from the Array and convert it into hours, minutes and seconds and return it as an object.
*/

function calculateSleepTime(times) {
    let sum = 0;
    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
        sum = sum + time;
    }
    let hours = Math.floor(sum / 3600);
    let minutes = Math.floor((sum % 3600) / 60);
    let seconds = sum % 60;
    return { hour: hours, minute: minutes, second: seconds };
}
const array = [1000, 499, 519, 300];
const result = calculateSleepTime(array);
console.log(result);