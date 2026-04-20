import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentsList: Student[] = [
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali.hassan@email.com',
      phone: '01000000000',
      address: '12 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.2,
      enrollmentDate: '2023-09-01',
      isActive: true,
    },
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.studentsList);

  students$ = this.studentsSubject.asObservable();

  constructor() {}

  getStudents(): Student[] {
    return this.studentsList;
  }

  getStudentById(id: number | string): Student | undefined {
    return this.studentsList.find((s) => s.id == id);
  }

  addStudent(student: Student): void {
    const nextId =
      this.studentsList.length > 0
        ? Math.max(...this.studentsList.map((s) => Number(s.id))) + 1
        : 1;

    const studentWithId = { ...student, id: nextId };
    this.studentsList = [...this.studentsList, studentWithId];
    this.studentsSubject.next(this.studentsList);
  }

  deleteStudent(id: number | string): void {
    this.studentsList = this.studentsList.filter((s) => s.id != id);
    this.studentsSubject.next(this.studentsList);
  }
}
