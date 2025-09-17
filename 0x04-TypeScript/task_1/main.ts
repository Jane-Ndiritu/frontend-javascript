type Teacher = {
  firstName: string;
  lastName: string;
  fulltimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: boolean;
};

const teacher: Teacher  = {
  firstName: "samuel",
  lastName: "kamau",
  fulltimeEmployee: false,
  yearsOfExperience: 5,
  location: "Nairobi",
  contract: false
};
console.log(teacher);