import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-percent-sale',
  templateUrl: './percent-sale.component.html',
  styleUrls: ['./percent-sale.component.scss'],
})
export class PercentSaleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['Madeira', 'Carne', 'Milho'],
        datasets: [
          {
            label: 'Madeira',
            data: [50000, 80000, 90000],
            backgroundColor: ['#7897ff', '#6284fd', '#2d5bff'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
