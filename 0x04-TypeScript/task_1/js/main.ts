// Interface for the printTeacher function using object destructuring
interface printTeacherFunction {
  (input: { firstName: string; lastName: string }): string;
}

// Implementation of printTeacher function using object destructuring
// and returning the exact pattern required
const printTeacher: printTeacherFunction = ({ firstName, lastName }: { firstName: string; lastName: string }): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ... rest of the code remains the same until the test section ...

// Display teachers and directors when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  displayPerson(teacher1);
  displayPerson(teacher2);
  displayPerson(director1);
  
  // Test the printTeacher function and display results
  const testResultsDiv = document.createElement('div');
  testResultsDiv.innerHTML = `
    <h2>printTeacher Function Tests:</h2>
    <p>printTeacher({firstName: "John", lastName: "Doe"}) -> "${printTeacher({firstName: "John", lastName: "Doe"})}"</p>
    <p>printTeacher({firstName: "Jane", lastName: "Smith"}) -> "${printTeacher({firstName: "Jane", lastName: "Smith"})}"</p>
    <p>printTeacher({firstName: "alice", lastName: "wonderland"}) -> "${printTeacher({firstName: "alice", lastName: "wonderland"})}"</p>
  `;
  
  const outputDiv = document.getElementById('output');
  if (outputDiv) {
    outputDiv.insertBefore(testResultsDiv, outputDiv.firstChild);
  }
  
  // Also log to console as requested
  console.log('printTeacher({firstName: "John", lastName: "Doe"}):', printTeacher({firstName: "John", lastName: "Doe"}));
  console.log('director1:', director1);
});

// Export for testing purposes
export { Teacher, Directors, printTeacherFunction, printTeacher, teacher1, teacher2, director1 };