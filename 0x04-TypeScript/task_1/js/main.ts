interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}
interface Directors extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Los Angeles'
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
function displayPerson(person: Teacher | Directors): void {
  const outputDiv = document.getElementById('output');
  if (outputDiv) {
    const personDiv = document.createElement('div');
    const title = 'numberOfReports' in person ? 'Director' : 'Teacher';
    const formattedName = printTeacher(person.firstName, person.lastName);
    
    personDiv.innerHTML = `
      <h3>${title}: ${formattedName}</h3>
      <pre>${JSON.stringify(person, null, 2)}</pre>
      <hr>
    `;
    outputDiv.appendChild(personDiv);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayPerson(teacher1);
  displayPerson(teacher2);
  displayPerson(director1);
  const testResultsDiv = document.createElement('div');
  testResultsDiv.innerHTML = `
    <h2>printTeacher Function Tests:</h2>
    <p>printTeacher("John", "Doe") -> "${printTeacher('John', 'Doe')}"</p>
    <p>printTeacher("Jane", "Smith") -> "${printTeacher('Jane', 'Smith')}"</p>
    <p>printTeacher("alice", "wonderland") -> "${printTeacher('alice', 'wonderland')}"</p>
  `;
  
  const outputDiv = document.getElementById('output');
  if (outputDiv) {
    outputDiv.insertBefore(testResultsDiv, outputDiv.firstChild);
  }

  console.log('printTeacher("John", "Doe"):', printTeacher('John', 'Doe'));
  console.log('director1:', director1);
});
export { Teacher, Directors, printTeacherFunction, printTeacher, teacher1, teacher2, director1 };