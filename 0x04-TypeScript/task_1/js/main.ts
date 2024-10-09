export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
 
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): printTeacherFunction {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}


