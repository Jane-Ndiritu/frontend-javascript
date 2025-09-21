interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  const firstChar = firstName.charAt(0);
  return `${firstChar}. ${lastName}`;
};

// Create a version that uses the exact pattern for testing
const testPrintTeacher = function({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};