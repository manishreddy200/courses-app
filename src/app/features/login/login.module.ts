import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, SharedModule, FontAwesomeModule],
  exports: [LoginComponent],
})
export class LoginModule { }
