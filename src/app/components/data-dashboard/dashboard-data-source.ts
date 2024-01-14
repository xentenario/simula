import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SimulaResultDataModel } from '../../simula/simula-data-model';

export class DashboardDataSource extends DataSource<SimulaResultDataModel> {
  constructor(private data : Observable<SimulaResultDataModel[]>) {
    super();
  }

  connect(): Observable<SimulaResultDataModel[]> {
    return this.data;
  }

  disconnect(): void {
    // this.data.complete();
  }
}
