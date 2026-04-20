import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { StudentsComponent } from './features/students/students.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { StudentDetailsComponent } from './features/student-details/student-details.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    NavbarComponent,
    StudentTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
