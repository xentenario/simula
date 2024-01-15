/**
 * Data source for the dashboard table
 * Mat-Table will use this data source to retrieve the data to display.
 * This is a custom data source that extends from DataSource.
 * It is used to provide the data to the table, using the simula service.
 * By separating the table from its datasource we can make the table component reusable.
 * and apply data transformations to the data before it is displayed.
 */
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject,  scan } from 'rxjs';
import {
  SimulaResultDataModel,
} from '../../simula/simula-data-model';
import { SimulaService } from '../../simula/simula.service';
import { inject } from '@angular/core';

export class DashboardDataSource extends DataSource<SimulaResultDataModel> {
  private data$: BehaviorSubject<SimulaResultDataModel[]> = new BehaviorSubject<
    SimulaResultDataModel[]
  >([]);
  private simula: SimulaService = inject(SimulaService);
  constructor() {
    super();
    this.simula.simulaData$
      .pipe(scan((acc: SimulaResultDataModel[], curr: SimulaResultDataModel) => [...acc, curr], []))
      .subscribe((data) => {
        this.data$.next(data);
      });
  }

  connect(): BehaviorSubject<SimulaResultDataModel[]> {
    return this.data$ as BehaviorSubject<SimulaResultDataModel[]>;
  }

  disconnect(): void {
    this.data$.complete();
  }
}
