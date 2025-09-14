namespace Subjects {
  export class Subject {
    teacher!: Teacher; // teacher is initially undefined, using definite assignment

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}