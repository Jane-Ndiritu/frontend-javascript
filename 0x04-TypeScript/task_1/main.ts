interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));