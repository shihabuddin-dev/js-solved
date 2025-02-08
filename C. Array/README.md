### **JavaScript Arrays - Everything You Need to Know**  

An **array** in JavaScript is a special variable that can store multiple values in a single variable. It is one of the most commonly used data structures.  

---

## **1. Creating an Array**
### **Using an Array Literal (Recommended)**
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]
```
### **Using the `new Array()` Constructor**
```javascript
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```
---

## **2. Accessing Array Elements**
Each element in an array has an **index**, starting from `0`.  
```javascript
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: "Red"
console.log(colors[2]); // Output: "Blue"
```
---

## **3. Modifying an Array**
```javascript
let cars = ["Toyota", "BMW", "Tesla"];
cars[1] = "Mercedes"; // Changing BMW to Mercedes
console.log(cars); // Output: ["Toyota", "Mercedes", "Tesla"]
```
---

## **4. Array Properties**
### **`length` - Get the number of elements in an array**
```javascript
let languages = ["JavaScript", "Python", "C++"];
console.log(languages.length); // Output: 3
```
---

## **5. Array Methods**
### **A. Adding & Removing Elements**
#### **`push()` - Add an element at the end**
```javascript
let animals = ["Cat", "Dog"];
animals.push("Elephant");
console.log(animals); // Output: ["Cat", "Dog", "Elephant"]
```

#### **`pop()` - Remove the last element**
```javascript
animals.pop();
console.log(animals); // Output: ["Cat", "Dog"]
```

#### **`unshift()` - Add an element at the beginning**
```javascript
animals.unshift("Lion");
console.log(animals); // Output: ["Lion", "Cat", "Dog"]
```

#### **`shift()` - Remove the first element**
```javascript
animals.shift();
console.log(animals); // Output: ["Cat", "Dog"]
```

---

### **B. Merging & Slicing Arrays**
#### **`concat()` - Merge two arrays**
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

#### **`slice()` - Extract elements from an array**
```javascript
let numbers = [10, 20, 30, 40, 50];
let sliced = numbers.slice(1, 4); // Extracts index 1 to 3 (4 is excluded)
console.log(sliced); // Output: [20, 30, 40]
```

---

### **C. Modifying and Sorting**
#### **`splice()` - Remove or Replace elements**
```javascript
let cities = ["New York", "London", "Paris"];
cities.splice(1, 1, "Tokyo"); // Removes 1 element at index 1 and adds "Tokyo"
console.log(cities); // Output: ["New York", "Tokyo", "Paris"]
```

#### **`sort()` - Sort an array (Alphabetically)**
```javascript
let letters = ["D", "A", "C", "B"];
letters.sort();
console.log(letters); // Output: ["A", "B", "C", "D"]
```

#### **`reverse()` - Reverse an array**
```javascript
letters.reverse();
console.log(letters); // Output: ["D", "C", "B", "A"]
```

---

### **D. Searching**
#### **`indexOf()` - Find the index of an element**
```javascript
let items = ["Pen", "Pencil", "Eraser"];
console.log(items.indexOf("Pencil")); // Output: 1
```

#### **`includes()` - Check if an element exists**
```javascript
console.log(items.includes("Marker")); // Output: false
console.log(items.includes("Pen"));    // Output: true
```

---

## **6. Looping Through an Array**
### **Using `for` loop**
```javascript
let numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Output: 10 20 30 40
```

### **Using `forEach()` (Recommended)**
```javascript
numbers.forEach(function(num) {
    console.log(num);
});
```

### **Using `map()` (Creates a new array)**
```javascript
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [100, 400, 900, 1600]
```

---

## **7. Advanced Array Methods**
### **`filter()` - Returns a new array with elements that pass a test**
```javascript
let ages = [12, 18, 22, 30, 40];
let adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 22, 30, 40]
```

### **`reduce()` - Reduces an array to a single value**
```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15
```

---

## **8. Multi-Dimensional Arrays**
An **array inside an array** is called a **multi-dimensional array**.
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6
```

---

## **Conclusion**
JavaScript arrays are **powerful and flexible**, allowing you to store, modify, and manipulate data efficiently.  
Would you like to practice with some exercises? 🚀