//1)Looping Through an Array
const numbers = [10, 20, 30, 40];

console.log("for loop");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("forEach");
numbers.forEach(num => {
    console.log(num);
});

console.log("for...of");
for (const num of numbers) {
    console.log(num);
}

console.log("for...in");
for (const index in numbers) {
    console.log(numbers[index]);
}

//2)Loop Through an Object

const student = {
    name: "Bala",
    age: 21,
    grade: "A"
};

for (const key in student) {
    console.log(key, student[key]);
}

//3)Using map()

const marks = [50, 60, 70, 80];

const updatedMarks = marks.map(mark => mark - 10);

console.log(updatedMarks);

//4) Using filter()

const values = [5, 12, 8, 25, 3, 15];

const result = values.filter(value => value > 10);

console.log(result);

//5)Using reduce()

const nums = [5, 10, 15, 20];

const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);
