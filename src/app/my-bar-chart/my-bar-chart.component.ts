import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MatDialog, MatDialogConfig} from '@angular/material';
import {DetailsComponent} from '../details/details.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})

export class MyBarChartComponent implements OnInit {

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chart = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      responsive: true,
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

    this.chart = new Chart('canvas2', {
      type: 'pie',
      responsive: true,
      data: {
        labels: this.barChartLabels, // your labels array
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40], // your data array
            borderColor: '#00AEFF',
            backgroundColor: '#f9ff3d',
            fill: false
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

  chartClicked(event: any) {
    console.log(event);
    console.log('clicked');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    dialogConfig.closeOnNavigation = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      id: 1,
      title: 'Details'
    };

    this.dialog.open(DetailsComponent, dialogConfig);
  }

}
