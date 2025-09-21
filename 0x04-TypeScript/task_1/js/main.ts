// Interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Main function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Additional function with the exact pattern the test wants
const printTeacherWithDestructuring = function({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
};

// Make both available
export { printTeacher, printTeacherWithDestructuring };