interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
};

console.log(printTeacher({ firstName: "samuel", lastName: "kamau" })); // S. kamau
console.log(printTeacher({ firstName: "john", lastName: "mathew" })); // J. mathew
