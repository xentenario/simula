import { Component } from '@angular/core';
import { SimulaFormComponent } from '../simula-form/simula-form.component';
import { DataDashboardComponent } from '../data-dashboard/data-dashboard.component';
import {
  SimulaEntryDataModel,
  SimulaResultDataModel,
} from '../../simula/simula-data-model';
import { SimulaService } from '../../simula/simula.service';
import { Observable, map, of, scan, switchMap, tap } from 'rxjs';
import { DashboardDataSource } from '../data-dashboard/dashboard-data-source';

@Component({
  selector: 'simula-canvas',
  templateUrl: './simula-canvas.component.html',
  styleUrls: ['./simula-canvas.component.scss'],
  standalone: true,
  imports: [SimulaFormComponent, DataDashboardComponent],
})
export class SimulaCanvasComponent {
  simulaData!: DashboardDataSource;
  data$: Observable<SimulaResultDataModel[]> = of([]);
  constructor(private simula: SimulaService) {}

  onRunSimula(data: SimulaEntryDataModel): void {
    console.log('Simula running...');
    console.log('With: ', data);
    this.data$ = this.juli(data);
    this.simulaData = new DashboardDataSource(this.juli(data));
  }

  juli(data: SimulaEntryDataModel): Observable<SimulaResultDataModel[]> {
    return this.simula
    .runCalculationsOverTime(data)
    .pipe(
      scan(
        (acc: SimulaResultDataModel[], value: SimulaResultDataModel) => [
          ...acc,
          value,
        ],
        []
      )
    );
  }
}
