// TypeScript interfaces.
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
// inherits from Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// prints initial and surname of teacher instance.
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// student class
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface IStudentClassContructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;
  constructor(firstName: string, lastName: string): void {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this._firstName;
  }
}
