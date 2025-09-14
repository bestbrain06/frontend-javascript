/// <reference path="./Teacher.ts" />

namespace Subjects {
  // The interface is optional if the test doesn't require it, but safe to include
  export interface SubjectInterface {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  export class Subject implements SubjectInterface {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
