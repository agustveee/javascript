// 1 Create and Use an Object
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isRead: false
};

console.log(book.title);
console.log(book["author"]);
console.log(book.pages);
console.log(book["isRead"]);

book.isRead = true;
book.genre = "Classic";
console.log(book);

// 2 Create and Modify an Array of Objects
let movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
    { title: "The Matrix", director: "Wachowskis", year: 1999 }
];

console.log(movies[1].title);

movies.push({ title: "Avatar", director: "James Cameron", year: 2009 });

movies[0].year = 2023;

console.log(movies);

// 3 Combine Objects and Arrays
let student = {
    name: "John Doe",
    age: 21,
    subjects: ["Math", "Science", "History"]
};

console.log(student.subjects[0]);

student.subjects.push("Art");

console.log(student);

