import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { PieChartExpensesComponent } from '../components/pie-chart-expenses/pie-chart-expenses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, PieChartExpensesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
