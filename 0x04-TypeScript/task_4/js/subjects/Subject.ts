namespace Subjects {
  export class Subject {
    teacher!: Teacher; // definite assignment

    // Setter method for teacher
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}