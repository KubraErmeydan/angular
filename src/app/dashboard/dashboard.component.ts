import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatProgressSpinnerModule, ProgressSpinnerMode} from '@angular/material/progress-spinner';



import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent {
  
  
  color: ThemePalette= 'primary';
  mode: ProgressSpinnerMode= 'determinate';
  value=65;


  // lineChart = new Chart({
  //   chart:{
  //     type: 'line'
  //   },
  //   credits:{
  //     enabled: false
  //   },
  //   series:[
  //     {
  //       data:[100,150,125,115,165,99,115,99,210,200]
  //     } as any
  //   ]
  // });

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions | any>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [100,150,125,115,165,99,115,99,210,200]       
        } 
      ],
      chart: {
        height: 150,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        
      },
      
      stroke: {
        curve: "straight"
      },
      grid: 
      {
        row: {
          colors: [ "transparent"],
           // takes an array which will be repeated on columns
          opacity: 1,
          
        }
      },
      xaxis: {             
        categories: [
          "9/19",
          "10/19",
          "11/19",
          "12/19",
          "1/19",
          "2/19",
          "3/19",
          "4/19",
          "5/19"
        ],axisTicks: {
          show: true
        },
        
  tooltip: {
    shared: false,
    intersect: true,
    y: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "top",
    offsetX: 40
  }
      }
    };
  }
}
