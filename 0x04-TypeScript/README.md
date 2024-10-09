# TypeScript

This project contains tasks for learning to use TypeScript.

## Tasks To Complete

Tasks
0. Creating an interface for a student
mandatory
Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js
 
1. Let's build a Teacher interface
mandatory
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
Example:

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json
2. Extending the Teacher class
mandatory
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

Example:

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts
3. Printing teachers
mandatory
Write a function printTeacher:

It accepts two arguments firstName and lastName
It returns the first letter of the firstName and the full lastName
Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named printTeacherFunction.

Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts
4. Writing a class
mandatory
Write a Class named StudentClass:

The constructor accepts firstName(string) and lastName(string) arguments
The class has a method named workOnHomework that return the string Currently working
The class has a method named displayName. It returns the firstName of the student
The constructor of the class should be described through an Interface
The class should be described through an Interface
Requirements:

You can reuse the Webpack configuration from the previous exercise to compile the code.
When running npm run build, no TypeScript error should be displayed.
Every variable should use TypeScript when possible.
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts
5. Advanced types Part 1
mandatory
Create the DirectorInterface interface with the 3 expected methods:

workFromHome() returning a string
getCoffeeBreak() returning a string
workDirectorTasks() returning a string
Create the TeacherInterface interface with the 3 expected methods:

workFromHome() returning a string
getCoffeeBreak() returning a string
workTeacherTasks() returning a string
Create a class Director that will implement DirectorInterface

workFromHome should return the string Working from home
getToWork should return the string Getting a coffee break
workDirectorTasks should return the string Getting to director tasks
Create a class Teacher that will implement TeacherInterface

workFromHome should return the string Cannot work from home
getCoffeeBreak should return the string Cannot have a break
workTeacherTasks should return the string Getting to work
Create a function createEmployee with the following requirements:

It can return either a Director or a Teacher instance
It accepts 1 arguments:
salary(either number or string)
if salary is a
