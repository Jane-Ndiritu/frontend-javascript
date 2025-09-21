interface printTeacherFunction {
  (input: { firstName: string; lastName: string }): string;
}
const printTeacher: printTeacherFunction = ({ firstName, lastName }: { firstName: string; lastName: string }): string => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};
document.addEventListener('DOMContentLoaded', () => {
  displayPerson(teacher1);
  displayPerson(teacher2);
  displayPerson(director1);
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
  console.log('printTeacher({firstName: "John", lastName: "Doe"}):', printTeacher({firstName: "John", lastName: "Doe"}));
  console.log('director1:', director1);
});
export { Teacher, Directors, printTeacherFunction, printTeacher, teacher1, teacher2, director1 };