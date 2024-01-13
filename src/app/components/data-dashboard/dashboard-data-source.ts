import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SimulaResultDataModel } from '../../simula/simula-data-model';

export class DashboardDataSource extends DataSource<SimulaResultDataModel> {
  private data = new BehaviorSubject<SimulaResultDataModel[]>([]);

  constructor() {
    super();
  }

  connect(): Observable<SimulaResultDataModel[]> {
    return of([
      {
        heatTransferRate: 10,
        panelTemperature: 20,
        waterTemperature: 30,
        waterTankTemperature: 40,
        tankTemperature: 50,
      },
      {
        heatTransferRate: 10,
        panelTemperature: 20,
        waterTemperature: 30,
        waterTankTemperature: 40,
        tankTemperature: 50,
      },
      {
        heatTransferRate: 10,
        panelTemperature: 20,
        waterTemperature: 30,
        waterTankTemperature: 40,
        tankTemperature: 50,
      },
      {
        heatTransferRate: 10,
        panelTemperature: 20,
        waterTemperature: 30,
        waterTankTemperature: 40,
        tankTemperature: 50,
      },
    ]);
  }

  disconnect(): void {
    this.data.complete();
  }
}
