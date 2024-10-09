export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Brian",
  lastName: "Nanjeri",
  age: 23,
  location: "Nairobi",
};
const studentB: Student = {
  firstName: "John",
  lastName: "Junior",
  age: 22,
  location: "Eldoret",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];

