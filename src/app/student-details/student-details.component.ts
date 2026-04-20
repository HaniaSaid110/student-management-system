import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  @Input() userId!: string;

  student: Student | undefined;

  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.student = this.studentService.getStudentById(this.userId);
  }
}
