import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  constructor(private studentService: StudentsService) {}

  students$ = this.studentService.students$;

  handleDelete(id: number | string) {
    this.studentService.deleteStudent(id);
  }
  // search
  searchWord = '';

  getFilteredStudents(studentsList: Student[]) {
    if (!this.searchWord) {
      return studentsList;
    }

    return studentsList.filter(
      (student) =>
        student.firstName
          .toLowerCase()
          .includes(this.searchWord.toLowerCase()) ||
        student.lastName.toLowerCase().includes(this.searchWord.toLowerCase()),
    );
  }
}
