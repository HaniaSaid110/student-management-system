import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  newStudent: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 18,
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    department: 'Computer Science',
    level: 1,
    GPA: 0,
    enrollmentDate: '2023-10-01',
    isActive: true,
  };

  constructor(
    private studentService: StudentsService,
    private router: Router,
  ) {}
  onSubmit() {
    this.newStudent.id = Math.floor(Math.random() * 1000);

    this.studentService.addStudent(this.newStudent);

    this.router.navigate(['/students']);
  }
}
