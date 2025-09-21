function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}
console.log(printTeacher("john", "doe"));