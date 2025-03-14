/* 
২. const project {id: 101, title: "Web App", budget: 3000, client: "Tech Corp"} এখানে title বাদে বাকি প্রোপার্টিগুলো আলাদা একটা অবজেক্টে রাখ 
*/
const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" }
const { title, ...more } = project
console.log(more);