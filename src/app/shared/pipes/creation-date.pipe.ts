import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {
  datePipe = new DatePipe('en-US');
  transform(value: string) {
    return this.datePipe.transform(value, "dd.MM.YYYY");
  }
}
