/* 
২. ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে।
 */
const players = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']
const updatePlayers = players.filter(player => (player.length > 5))
console.log(updatePlayers);