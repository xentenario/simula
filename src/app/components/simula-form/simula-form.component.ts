/**
  SIMULA FORM COMPONENT
  Simula form component is used to collect data from user and emit it to parent component
*/


import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SimulaEntryDataModel } from '../../simula/simula-data-model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'simula-form',
  templateUrl: './simula-form.component.html',
  styleUrls: ['./simula-form.component.scss'],
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule],
})
export class SimulaFormComponent {
  simulaForm: FormGroup;
  @Output() simulaDataCollected = new EventEmitter<SimulaEntryDataModel>();

  constructor() {
    this.simulaForm = new FormGroup({
      panelArea: new FormControl(10),
      panelMass: new FormControl(50),
      panelEfficiency: new FormControl(0.8),
      tankTemperature: new FormControl(50),
      tankMass: new FormControl(100),
      tankSpecificHeat: new FormControl(1),
      ambientTemperature: new FormControl(25),
      panelSpecificHeat: new FormControl(0.5),
      waterTemperature: new FormControl(40),
      waterMass: new FormControl(80),
      waterSpecificHeat: new FormControl(0.8),
      waterTankMass: new FormControl(120),
      waterTankTemperature: new FormControl(45),
      waterTankSpecificHeat: new FormControl(1.2),
      timeStep: new FormControl(0.1),
      totalTime: new FormControl(1),
    });
  }

  onCalculateSimulaClick(): void {
    this.simulaDataCollected.emit({
      panelArea: this.simulaForm.controls['panelArea'].value,
      panelMass: this.simulaForm.controls['panelMass'].value,
      panelEfficiency: this.simulaForm.controls['panelEfficiency'].value,
      tankTemperature: this.simulaForm.controls['tankTemperature'].value,
      tankMass: this.simulaForm.controls['tankMass'].value,
      tankSpecificHeat: this.simulaForm.controls['tankSpecificHeat'].value,
      ambientTemperature: this.simulaForm.controls['ambientTemperature'].value,
      panelSpecificHeat: this.simulaForm.controls['panelSpecificHeat'].value,
      waterMass: this.simulaForm.controls['waterMass'].value,
      waterTemperature: this.simulaForm.controls['waterTemperature'].value,
      waterSpecificHeat: this.simulaForm.controls['waterSpecificHeat'].value,
      waterTankMass: this.simulaForm.controls['waterTankMass'].value,
      waterTankTemperature: this.simulaForm.controls['waterTankTemperature'].value,
      waterTankSpecificHeat: this.simulaForm.controls['waterTankSpecificHeat'].value,
      timeStep: this.simulaForm.controls['timeStep'].value,
      totalTime: this.simulaForm.controls['totalTime'].value,
    });
  }
}
