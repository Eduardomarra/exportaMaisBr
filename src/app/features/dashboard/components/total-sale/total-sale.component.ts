import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-total-sale',
  templateUrl: './total-sale.component.html',
  styleUrls: ['./total-sale.component.scss'],
})
export class TotalSaleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('line', {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            label: 'Madeira',
            data: [50000, 80000, 90000, 100000, 50000, 80000, 90000, 100000],
            fill: false,
            backgroundColor: ['#7897ff'],
            borderColor: '#7897ff',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
