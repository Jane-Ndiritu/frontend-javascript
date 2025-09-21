type RowID = number;
interface RowElement {
  firstName: string;
lastName: string
age?: number
}
const newRowID: RowID = insertRow(row);

const updatedRow: RowElement = {
  firstName: row.firstName,
  lastName: row.lastName,
  age: 23
};
const updatedRow: RowElement = {
  ...row,
  age: 23
};
updateRow(newRowID, updatedRow);
deleteRow(newRowID);