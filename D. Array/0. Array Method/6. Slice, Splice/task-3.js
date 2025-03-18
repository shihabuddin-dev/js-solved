/* 
৩. movieList নামে একটা অ্যারে, যেখানে Inception, Titanic, Joker, Avatar, Interstellar আছে। splice দিয়ে Joker আর Avatar বাদ দিয়ে তার জায়গায় Batman আর Superman যোগ কর।
 */
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar']
const spliceMovieList = movieList.splice(2, 2, 'Batman', 'Superman')
console.log(movieList);