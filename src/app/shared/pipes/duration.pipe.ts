import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  duration = 0;
  hours = '';
  minutes = '';

  transform(value: string) {
    if (!isNaN(+value)) {
      this.duration = +value;
    }
    this.hours = String(Math.floor(this.duration / 60));
    this.minutes = String(this.duration % 60);

    this.hours = this.hours.length == 1 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes.length == 1 ? '0' + this.minutes : this.minutes;
    return `${this.hours}:${this.minutes}`;
  }
}
