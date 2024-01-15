import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of, scan } from 'rxjs';
import {
  SimulaEntryDataModel,
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
