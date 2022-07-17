import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseEditFormComponent } from './course-edit-form/course-edit-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { RegistrationModule } from '../registration/registration.module';
import { LoginModule } from '../login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent, CourseEditFormComponent],
  imports: [CommonModule, SharedModule, RegistrationModule, LoginModule, ReactiveFormsModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
