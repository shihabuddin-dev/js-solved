/* 
8. players নামে একটা অ্যারে, যার উপাদান Messi, Ronaldo, Neymar, Mbappel splice ব্যবহার করে Neymar বাদ দিয়ে Halland যোগ কর  
*/
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappel']
const splicePlayers = players.splice(2, 1, 'Halland')
console.log(players);