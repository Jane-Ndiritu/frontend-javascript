interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: student = {
    firstName: "Jane",
    lastName: "Ndiritu",
    age: 20,
    location: "Nairobi"
};
const student2: student = {
    firstName: "John",
    lastName: "Ndegwa",
    age: 22,
    location: "Mombasa"
};
const studentsList: student[] = [student1, student2];
// 4. Render a table in the DOM using Vanilla JS
const table = document.createElement("table");
table.border = "1";

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
document.body.appendChild(table);