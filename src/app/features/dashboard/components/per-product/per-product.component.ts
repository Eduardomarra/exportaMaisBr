import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-per-product',
  templateUrl: './per-product.component.html',
  styleUrls: ['./per-product.component.scss'],
})
export class PerProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const myChart = new Chart('piechart', {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            label: 'Madeira',
            data: [
              50000, 80000, 90000, 100000, 40000, 150000, 50000, 80000, 90000,
              100000, 40000, 150000,
            ],
            backgroundColor: ['#7897ff'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  }
}
