import { Component, signal } from '@angular/core';
import { SimulaFormComponent } from '../simula-form/simula-form.component';
import { DataDashboardComponent } from '../data-dashboard/data-dashboard.component';
import {
  SimulaEntryDataModel,
  SimulaResultDataModel,
} from '../../simula/simula-data-model';
import { SimulaService } from '../../simula/simula.service';
import { BehaviorSubject, Observable, map, of, scan, switchMap, tap } from 'rxjs';
import { DashboardDataSource } from '../data-dashboard/dashboard-data-source';
import { ChartsComponent } from '../charts/charts.component';
import { NgIf } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'simula-canvas',
  templateUrl: './simula-canvas.component.html',
  styleUrls: ['./simula-canvas.component.scss'],
  standalone: true,
  imports: [SimulaFormComponent, DataDashboardComponent, ChartsComponent, NgIf],
})
export class SimulaCanvasComponent {
  simulaData = new DashboardDataSource();
  chartOptions: ChartConfiguration['options'];
  chartType: ChartType = 'line';
  chartData!: ChartConfiguration['data'];
  title: string = 'Charts';
  constructor(private simula: SimulaService) {
    this.simula.simulaData$
    .pipe(
      scan(
        (acc: number[], curr: SimulaResultDataModel) => [
          ...acc,
          Math.round((curr.panelTemperature + Number.EPSILON) * 100) / 100
        ],
        []
      )
    )
    .subscribe((data) => {
      console.log('Data: ', data);
      this.chartData = {
        datasets: [
          {
            data: data,
            label: 'Panel Temperature',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
        ],
        labels: data
      };
    });

  this.chartOptions = {
    // Chart options
  };
  }

  onRunSimula(data: SimulaEntryDataModel): void {
    console.log('Simula running...');
    console.log('With: ', data);
    this.simula.runCalculationsOverTime(data);  // Start simulation calculations
  }
}

