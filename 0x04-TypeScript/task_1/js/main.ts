interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher = function(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};
const printTeacherPattern = function({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
};
console.log(printTeacher("John", "Doe")); 