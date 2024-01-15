/**
 * GENERIC COMPONENT TO GENERATE CHARTS
 */

import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js/auto';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'simula-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  standalone: true,
  imports: [NgChartsModule],
})
export class ChartsComponent {
  @Input() chartOptions: ChartConfiguration['options'];
  @Input() chartType: ChartType = 'line';
  @Input() chartData!: ChartConfiguration['data'];
  @Input() title: string = 'Charts';

}
