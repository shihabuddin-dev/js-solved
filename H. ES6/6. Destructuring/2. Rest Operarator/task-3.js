/* 
৩. const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React"} এখানে language আর specialty আলাদা প্রোপার্টি হিসেবে রেখে বাকিগুলো details নামে একটা অবজেক্টে রাখ।
 */
const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" }
const { language, specialty, ...details } = programmer
console.log(language);
console.log(specialty);
console.log(details);
