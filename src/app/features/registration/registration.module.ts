import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, FontAwesomeModule],
  exports: [RegistrationComponent],
})
export class RegistrationModule { }
