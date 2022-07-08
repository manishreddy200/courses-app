import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components/index';


const components: any[] = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [components]
})
export class SharedModule { }
