import { Component } from "@angular/core";
import { SimulaFormComponent } from "../simula-form/simula-form.component";
import { DataDashboardComponent } from "../data-dashboard/data-dashboard.component";
import { SimulaEntryDataModel } from "../../simula/simula-data-model";
import { SimulaService } from "../../simula/simula.service";

@Component({
  selector: 'simula-canvas',
  templateUrl: './simula-canvas.component.html',
  styleUrls: ['./simula-canvas.component.scss'],
  standalone: true,
  imports:[SimulaFormComponent, DataDashboardComponent]
})
export class SimulaCanvasComponent  {

  constructor(private simula: SimulaService) { }

  onRunSimula(data: SimulaEntryDataModel): void {
    console.log("Simula running...");
    console.log("With: " , data );

    this.simula.runCalculationsOverTime(data);
  }
}
