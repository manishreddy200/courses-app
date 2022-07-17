import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components/index';
import { EmailValidatorDirective } from './email-validator.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';
import { TogglePasswordDirective } from './toggle-password.directive';


const components: any[] = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, EmailValidatorDirective, DurationPipe, CreationDatePipe, StringJoinerPipe, TogglePasswordDirective];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [components]
})
export class SharedModule { }
