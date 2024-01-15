import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';
import { NgChartsModule } from 'ng2-charts';
import { SimulaService } from '../../simula/simula.service';
import { SimulaResultDataModel } from '../../simula/simula-data-model';
import { scan } from 'rxjs';

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
