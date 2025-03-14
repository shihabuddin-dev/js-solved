/* 
৩. বন্ধুদের age অনুসারে sorting করে দেখা const friends = [{name: 'Ali', age: 29}, {name: 'Sara', age: 22}, {name: 'Tariq', age: 35}];
 */
const friends = [
    { name: 'Ali', age: 29 },
    { name: 'Sara', age: 22 },
    { name: 'Tariq', age: 35 }
]

// Sort by Ascending order 
const sortFriendsAgeByAsc = friends.sort((a, b) => a.age - b.age)
console.log(sortFriendsAgeByAsc);

// Sort by Descending order 
const sortFriendsAgeByDes = friends.sort((a, b) => b.age - a.age)
console.log(sortFriendsAgeByDes);