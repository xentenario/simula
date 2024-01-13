import { Component } from '@angular/core';
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
  dataSource = new DashboardDataSource();
  constructor() {}
}
