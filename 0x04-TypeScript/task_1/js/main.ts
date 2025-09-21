interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher = function(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};
const typedPrintTeacher: printTeacherFunction = printTeacher;
export { printTeacher, printTeacherFunction };