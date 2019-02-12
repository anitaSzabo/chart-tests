import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})

export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'radar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.barChartLabels, // your labels array
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40], // your data array
            borderColor: '#00AEFF',
            backgroundColor: '#605fff',
            fill: false,
            label: 'első'
          },
          {
            data: [28, 48, 40, 19, 86, 27, 90], // your data array
            borderColor: '#ff2f34',
            backgroundColor: '#ff5d69',
            fill: false,
            label: 'masodik'
          }
        ]
      },
      options: {
        tooltips: {
          callbacks: {
            label: (toolipItem, data) => {
              var label = data.datasets[toolipItem.datasetIndex].label || '';

              console.log(toolipItem);
              console.log(data);
              console.log(label);
            }
          }
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }

  onClick() {
    console.log('hahó');
  }

  chartClicked(event: any) {
    console.log(event);
  }

  chartHovered(event: any) {
    console.log(event);
  }
}
