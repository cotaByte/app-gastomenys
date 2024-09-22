import { Component, Input } from '@angular/core';

@Component({
  selector: 'month-selector',
  standalone: true,
  imports: [],
  templateUrl: './monthselector.component.html',
  styleUrl: './monthselector.component.scss',
})
export class MonthselectorComponent {
  @Input() year: number = new Date().getFullYear();

  public months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];
}
