import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { map, of } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'pie-chart-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart-expenses.component.html',
  styleUrl: './pie-chart-expenses.component.scss',
})
export class PieChartExpensesComponent {
  @ViewChild('canvasChart') canvasRef!: ElementRef<HTMLCanvasElement>;

  chart: any;

  //TODO: CALL TO API TO GET DATA
  public chartData = of(null).pipe(
    map(
      data =>
        new Chart('chart', {
          type: 'pie',

          data: {
            labels: ['Expenses', 'Incomes', 'Helath', 'Food', 'Transport'],
            datasets: [
              {
                label: 'Expenses',
                data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
                backgroundColor: '#F87171',
              },
              {
                label: 'Incomes',
                data: ['467', '576', '572', '79', '92', '574', '573', '576'],
                backgroundColor: '#34D399',
              },

              {
                label: 'Helath',
                data: ['467', '576', '572', '79', '92', '574', '573', '576'],
                backgroundColor: '#FBBF24',
              },
              {
                label: 'Food',
                data: ['467', '576', '572', '79', '92', '574', '573', '576'],
                backgroundColor: '#FCD34D',
              },
              {
                label: 'Transport',
                data: ['467', '576', '572', '79', '92', '574', '573', '576'],
                backgroundColor: '#93C5FD',
              },
              {
                label: 'Sales',
                data: ['467', '576', '572', '79', '92', '574', '573', '576'],
                backgroundColor: '#3B82F6',
              },
              {
                label: 'Profit',
                data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
                backgroundColor: '#FFedf0',
              },
            ],
          },
          options: {
            aspectRatio: 4,
          },
        })
    )
  );
}
