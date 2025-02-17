// Problem-5 
function calculateSleepTime(times) {
    let sum = 0;
    for (let time of times) {
        sum = sum + time;
        if (typeof time !== 'number') {
            return "Invalid";
        }
    }
    let hours = Math.floor(sum / 3600);
    let minutes = Math.floor((sum % 3600) / 60);
    let seconds = sum % 60;
    return { hour: hours, minute: minutes, second: seconds };
}
const array = [1000, 499, 519, 300];
const result = calculateSleepTime(array);
console.log(result);