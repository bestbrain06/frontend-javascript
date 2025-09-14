/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher!: Teacher; // Definite assignment

    // Correct setter method
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
