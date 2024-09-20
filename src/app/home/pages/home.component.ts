import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { PieChartExpensesComponent } from '../components/pie-chart-expenses/pie-chart-expenses.component';
import { GastoItemComponent } from '../../shared/components/gasto-item/gasto-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, PieChartExpensesComponent, GastoItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
