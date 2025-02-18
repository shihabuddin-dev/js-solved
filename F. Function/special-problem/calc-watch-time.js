/* Problem-10

Subah wastes time watching Tiktok all day. He doesn't study. Subah's father is very worried about Subah wasting this time. Subah's father wants to create a function so that he can see how much time Subah wastes watching videos every day. Your task is to make Subah's father create a function called calculateWatchTime() that will take an Array as input. The Array will store the time (seconds) spent watching Subah's videos as a Number. The function will extract the total time from the Array, convert it to hours, minutes and seconds and return it as an object.*/

function calculateWatchTime(times) {
    let watchTime = 0;
    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
        watchTime = watchTime + time;
    }
    let hours = Math.floor(watchTime / 3600);
    let minutes = Math.floor((watchTime % 3600) / 60);
    let seconds = watchTime % 60;
    return { hour: hours, minute: minutes, second: seconds }


}
const times = [1000, 2000, 725];
const result = calculateWatchTime(times);
console.log(result);