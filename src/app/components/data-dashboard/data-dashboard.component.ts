/**
 * Displays Simulation Data in a table
 */
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DashboardDataSource } from './dashboard-data-source';

@Component({
  selector: 'data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class DataDashboardComponent {
  displayedColumns = [
    'heatTransferRate',
    'panelTemperature',
    'waterTemperature',
    'waterTankTemperature',
    'tankTemperature',
  ];

  @Input()
  dataSource!: DashboardDataSource;


  constructor() {}


}
