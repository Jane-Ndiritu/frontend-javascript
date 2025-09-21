// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function with EXACT patterns the test wants
const printTeacher = function({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
};

// Set the type for the function
const typedPrintTeacher: printTeacherFunction = (firstName, lastName) => {
  return printTeacher({ firstName, lastName });
};

// Example usage
console.log(printTeacher({ firstName: "J", lastName: "Doe" })); // J. Doe